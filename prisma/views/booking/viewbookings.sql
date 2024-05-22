SELECT
  `booking`.`rooms`.`id` AS `id`,
  `booking`.`rooms`.`title` AS `title`,
  `booking`.`bookroom`.`bookDate` AS `bookDate`,
  `booking`.`bookroom`.`timeStart` AS `timeStart`,
  `booking`.`bookroom`.`timeEnd` AS `timeEnd`
FROM
  (
    `booking`.`bookroom`
    JOIN `booking`.`rooms` ON(
      (
        `booking`.`bookroom`.`roomId` = `booking`.`rooms`.`id`
      )
    )
  )