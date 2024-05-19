'use client'
import { AlertModal } from '@/components/modal/alert-modal'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { User } from '@/constants/data'
import { Room } from '@/lib/room-validation'
import { Edit, MoreHorizontal, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { deleteRoom } from './actions'
import { useFormState } from 'react-dom'
import FormSubmitButton from '@/components/FormSubmitButton'

interface CellActionProps {
  data: Room
}

interface AdminButtonProps {
  roomId: number
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // const onConfirm = deleteRoom(data.id)
  //const onConfirm = async () => {}

  return (
    <>
      {/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => onConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/rooms/update/${data.id}`)}
          >
            <Edit className='mr-2 h-4 w-4' /> Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className='mr-2 h-4 w-4' /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
      <div className='flex items-center space-x-4'>
        <Button
          onClick={() => router.push(`/dashboard/rooms/update/${data.id}`)}
        >
          Update
        </Button>
        <DeleteRoomButton roomId={data.id} />
      </div>
    </>
  )
}

function DeleteRoomButton({ roomId }: AdminButtonProps) {
  const [formState, formAction] = useFormState(deleteRoom, undefined)

  return (
    <form action={formAction} className='space-y-1'>
      <input hidden name='roomId' value={roomId} />
      <FormSubmitButton className=' bg-red-500 hover:bg-red-600'>
        Delete
      </FormSubmitButton>
      {formState?.error && (
        <p className='text-sm text-red-500'>{formState.error}</p>
      )}
    </form>
  )
}
