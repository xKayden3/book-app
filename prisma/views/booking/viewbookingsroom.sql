SELECT
  `booking`.`rooms`.`id` AS `id`,
  `booking`.`rooms`.`title` AS `title`,
  date_format(`booking`.`bookroom`.`bookDate`, '%W %D %M %Y') AS `bookDate`,
  date_format(`booking`.`bookroom`.`timeStart`, '%r') AS `timeStart`,
  date_format(`booking`.`bookroom`.`timeEnd`, '%r') AS `timeEnd`
FROM
  (
    `booking`.`bookroom`
    JOIN `booking`.`rooms` ON(
      (
        `booking`.`bookroom`.`roomId` = `booking`.`rooms`.`id`
      )
    )
  )