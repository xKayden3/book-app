SELECT
  `booking`.`equipments`.`id` AS `id`,
  `booking`.`equipments`.`title` AS `title`,
  `booking`.`bookequipments`.`edpNumber` AS `edpNumber`,
  `booking`.`bookequipments`.`name` AS `name`,
  `booking`.`bookequipments`.`course` AS `course`,
  `booking`.`bookequipments`.`purpose` AS `purpose`,
  `booking`.`bookequipments`.`contactNo` AS `contactNo`,
  `booking`.`bookequipments`.`endorsedBy` AS `endorsedBy`,
  date_format(
    `booking`.`bookequipments`.`bookDateStart`,
    '%W %D %M %Y'
  ) AS `bookDateStart`,
  date_format(`booking`.`bookequipments`.`timeStart`, '%r') AS `timeStart`,
  date_format(
    `booking`.`bookequipments`.`bookDateEnd`,
    '%W %D %M %Y'
  ) AS `bookDateEnd`,
  date_format(`booking`.`bookequipments`.`timeEnd`, '%r') AS `timeEnd`
FROM
  (
    `booking`.`bookequipments`
    JOIN `booking`.`equipments` ON(
      (
        `booking`.`bookequipments`.`equipmentId` = `booking`.`equipments`.`id`
      )
    )
  )