---
title: "Eighth Post"
longdate: "April 6th, 2020"
date: "2020-04-06"
thumbnail: "eigth.png"
slug: "/eighth-post"
---

## Introduction

Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops. Locomotor trunks owl treats that will be 50 points, Mr. Potter. Witch Weekly, he will rise again and he will come for us, headmaster Erumpent horn. Fenrir Grayback horseless carriages ‘zis is a chance many would die for!

## Where we go from here

Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.

## Random blockquote

> "Mr. Potter. Witch Weekly, he will rise again and he will come for us, headmaster Erumpent horn."

## Here is an example of the Javascript

```javascript
console.log("Hello")
```

Ordered List

1. A
1. B
1. C

UnOrdered List

- D
- E
- F

## Another Block Quote

> "Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match."

## PHP Highlighting

```php
require_once '../connect.php';
$user = strtolower($_POST['username']);
$pass = $_POST['password'];

$query = $con->prepare('SELECT `password`, `playerID`  FROM `users` WHERE `username`= ?');
$query->bind_param('s', $user);
$query->execute();
$query->store_result();
$query->bind_result($password, $playerID);
$query->fetch();
$query->close();

if (password_verify($pass, $password)) {
    session_start();
    $_SESSION['sess_user'] = $user;
    $_SESSION['sess_userID'] = $playerID;
    header('Location: ../');
} else {
    session_start();
    $_SESSION['loginError'] = 'failed';
    $_SESSION['errorMessage'] = 'Invalid Credentials';
    header('Location: ../login');
}
```

![eight](https://s3.amazonaws.com/teisenhower.dev-test2/eigth.png)
