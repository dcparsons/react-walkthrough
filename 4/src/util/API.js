import axios from "axios";

export default {
    getGamesByTitle: function (gameTitle) {
        // ?? What do we do here?  We don't have an API to call...
        // Well, we technically could call our boardgame API but this is a client side app
        // and our app key should really be protected...hmmm
        return [{
            "id": "xBN25pEVRv",
            "name": "Magic Maze",
            "year_published": 2017,
            "min_players": 1,
            "max_players": 8,
            "min_playtime": 15,
            "max_playtime": 20,
            "min_age": 8,
            "description": "Recently stripped of your possessions, your group of down-on-their-luck adventurers has nary a copper piece between you. Your only option if you're to resume your dungeon-delving activities is to sack the local mall of valuables and supplies.<br />\r\n<br />\r\nMagic Maze is a real-time, co-operative game. Each player can control any of the 4 Hero pawns whenever he wants in order to make that hero perform a very specific action, to which other players do not have access: move north, explore a new area, ride an escalator? all of this requires rigorous co-operation between the players in order to succeed at moving the heroes wisely, and complete your mission before the sand timer runs out.<br />\r\n<br />\r\nMoreover, you will only be allowed to communicate for short periods during the game. The rest of the time, you must play without giving any visual or audio cues to each other.",
            "description_preview": "Recently stripped of your possessions, your group of down-on-their-luck adventurers has nary a copper piece between you. Your only option if you're to resume your dungeon-delving activities is to sack the local mall of valuables and supplies. \r\n \r\nMagic Maze is a real-time, co-operative game. Each player can control any of the 4 Hero pawns whenever he wants in order to make that hero perform a very specific action, to which other players do not have access: move north, explore a new area, ride an escalator? all of this requires rigorous co-operation between the players in order to succeed at moving the heroes wisely, and complete your mission before the sand timer runs out. \r\n \r\nMoreover, you will only be allowed to communicate for short periods during the game. The rest of the time, you must play without giving any visual or audio cues to each other.",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254953140-51v4tnUK2wL.jpg",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254953140-51v4tnUK2wL.jpg",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254953140-51v4tnUK2wL.jpg",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254953140-51v4tnUK2wL.jpg",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254953140-51v4tnUK2wL.jpg",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254953140-51v4tnUK2wL.jpg",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254953140-51v4tnUK2wL.jpg"
            },
            "url": "https://www.boardgameatlas.com/search/game/xBN25pEVRv",
            "price": "22.97",
            "msrp": "32.99",
            "discount": "0.30",
            "primary_publisher": "Dude Games",
            "publishers": [
                "Dude Games"
            ],
            "mechanics": [
                {
                    "id": "33UT4gTFqy"
                },
                {
                    "id": "qu5BcGjAzk"
                }
            ],
            "categories": [
                {
                    "id": "yq6hVlbM2R"
                },
                {
                    "id": "ZTneo8TaIO"
                }
            ],
            "designers": [
                " Kasper Lapp"
            ],
            "developers": [],
            "artists": [
                "Gyom"
            ],
            "names": [],
            "num_user_ratings": 36,
            "average_user_rating": 3.3333333333333335,
            "official_url": "https://dude.games/catalogue/product/DGMM01?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=5cc_ads",
            "rules_url": "http://www.ultraboardgames.com/magic-maze/game-rules.php",
            "weight_amount": 1.8,
            "weight_units": "lbs ",
            "size_height": 10,
            "size_width": 2.5,
            "size_depth": 10,
            "size_units": "inches ",
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 171,
            "reddit_week_count": 2,
            "reddit_day_count": 2
        },
        {
            "id": "qZ7XdSFpaI",
            "name": "Magic the Gathering",
            "year_published": null,
            "min_players": 2,
            "max_players": 5,
            "min_playtime": 30,
            "max_playtime": 60,
            "min_age": null,
            "description": "This entry is for discussion about Magic: the Gathering as a whole.",
            "description_preview": "This entry is for discussion about Magic: the Gathering as a whole.",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1547674624929",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1547674624929",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1547674624929",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1547674624929",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1547674624929",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1547674624929",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1547674624929"
            },
            "url": "https://www.boardgameatlas.com/search/game/qZ7XdSFpaI",
            "price": "34.77",
            "msrp": "0.00",
            "discount": "0.00",
            "primary_publisher": "Wizards of the Coast",
            "publishers": [
                "Wizards of the Coast"
            ],
            "mechanics": [],
            "categories": [],
            "designers": [],
            "developers": [],
            "artists": [],
            "names": [
                "Magic: The Gathering"
            ],
            "num_user_ratings": 50,
            "average_user_rating": 3.2599999999999993,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 77,
            "reddit_week_count": 0,
            "reddit_day_count": 3
        },
        {
            "id": "aJA4SkCf97",
            "name": "Killer Bunnies and the Quest for the Magic Carrot; Blue Starter Deck",
            "year_published": null,
            "min_players": null,
            "max_players": null,
            "min_playtime": null,
            "max_playtime": null,
            "min_age": null,
            "description": "Killer Bunnies and the Quest for the Magic Carrot is a fast paced, action filled card game, in which you must try to keep as many Bunnies alive as possible, while eliminating your opponents’ Bunnies. The problem: Your opponents are armed with weapons and will stop at nothing to keep you from winning the game, which can get dreadfully vengeful, horribly nasty, hilariously messy, and just plain fun! Can you keep from being attacked by the whimsical Whisk or the torching Flame Thrower? Defend your Bunnies with the Magic Spatula, or use a Feed The Bunny card to starve out an opponent! It’s off-the-wall strategic fun, where the goal is to survive and claim the Magic Carrot to win the game!",
            "description_preview": "Killer Bunnies and the Quest for the Magic Carrot is a fast paced, action filled card game, in which you must try to keep as many Bunnies alive as possible, while eliminating your opponents’ Bunnies. The problem: Your opponents are armed with weapons and will stop at nothing to keep you from winning the game, which can get dreadfully vengeful, horribly nasty, hilariously messy, and just plain fun! Can you keep from being attacked by the whimsical Whisk or the torching Flame Thrower? Defend your Bunnies with the Magic Spatula, or use a Feed The Bunny card to starve out an opponent! It’s off-the-wall strategic fun, where the goal is to survive and claim the Magic Carrot to win the game!",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257659256-61hiavV82BqL.jpg",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257659256-61hiavV82BqL.jpg",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257659256-61hiavV82BqL.jpg",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257659256-61hiavV82BqL.jpg",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257659256-61hiavV82BqL.jpg",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257659256-61hiavV82BqL.jpg",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257659256-61hiavV82BqL.jpg"
            },
            "url": "https://www.boardgameatlas.com/search/game/aJA4SkCf97",
            "price": "19.99",
            "msrp": "0.00",
            "discount": "0.00",
            "primary_publisher": "Ultra Pro",
            "publishers": [
                "Ultra Pro"
            ],
            "mechanics": [],
            "categories": [],
            "designers": [],
            "developers": [],
            "artists": [],
            "names": [
                "Killer Bunnies and the Quest for the Magic Carrot"
            ],
            "num_user_ratings": 12,
            "average_user_rating": 2.166666666666667,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 10,
            "reddit_week_count": 0,
            "reddit_day_count": 0
        },
        {
            "id": "vEdMjRlRYj",
            "name": "Magic the Gathering: Arena of the Planeswalkers",
            "year_published": null,
            "min_players": 2,
            "max_players": 5,
            "min_playtime": 60,
            "max_playtime": 75,
            "min_age": 10,
            "description": "The Multiverse consists of infinite planes of existence. Most beings live and die without ever knowing that their world is not the only one. But there are the extraordinary few who are born with &quot;the spark.&quot; If their sparks ignite, these rare mages are the only ones capable of traveling to myriad planes of the Multiverse, where they can reach heights of power otherwise impossible to achieve. They are known as Planeswalkers.<br>\n<br>\nTake Magic combat to the next dimension in the Arena of the Planeswalkers!<br>\n<br>\nChoose from five mighty Planeswalkers, each with unique powers and squads, and create your 3-D Battlefield based on the number of Planeswalkers you have! No matter the number, you&apos;re goal remains the same; seek and destroy your enemy Planeswalker and gather points to determine who will rule the Arena and who will fall.<br>\n<br>\nWhen your Planeswalkers battle, it is a confrontation that will shake a plane to its foundation. Are you ready to take up the challenge?",
            "description_preview": "The Multiverse consists of infinite planes of existence. Most beings live and die without ever knowing that their world is not the only one. But there are the extraordinary few who are born with \"the spark.\" If their sparks ignite, these rare mages are the only ones capable of traveling to myriad planes of the Multiverse, where they can reach heights of power otherwise impossible to achieve. They are known as Planeswalkers. \n \nTake Magic combat to the next dimension in the Arena of the Planeswalkers! \n \nChoose from five mighty Planeswalkers, each with unique powers and squads, and create your 3-D Battlefield based on the number of Planeswalkers you have! No matter the number, you're goal remains the same; seek and destroy your enemy Planeswalker and gather points to determine who will rule the Arena and who will fall. \n \nWhen your Planeswalkers battle, it is a confrontation that will shake a plane to its foundation. Are you ready to take up the challenge?",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254139376-51HQLjdIXVL.jpg",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254139376-51HQLjdIXVL.jpg",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254139376-51HQLjdIXVL.jpg",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254139376-51HQLjdIXVL.jpg",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254139376-51HQLjdIXVL.jpg",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254139376-51HQLjdIXVL.jpg",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254139376-51HQLjdIXVL.jpg"
            },
            "url": "https://www.boardgameatlas.com/search/game/vEdMjRlRYj",
            "price": "24.37",
            "msrp": "0.00",
            "discount": "0.00",
            "primary_publisher": "Wizards of the Coast",
            "publishers": [
                "Wizards of the Coast"
            ],
            "mechanics": [],
            "categories": [],
            "designers": [],
            "developers": [],
            "artists": [],
            "names": [],
            "num_user_ratings": 7,
            "average_user_rating": 3,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 7,
            "reddit_week_count": 0,
            "reddit_day_count": 0
        },
        {
            "id": "CE58EHbQ66",
            "name": "Magic Realm",
            "year_published": 1979,
            "min_players": 1,
            "max_players": 16,
            "min_playtime": 240,
            "max_playtime": 240,
            "min_age": 12,
            "description": "<p>From the 2nd edition rulebook intro for <strong>MAGIC REALM</strong>:</p>\r\n\r\n<p><strong>MAGIC REALM</strong> is a game of fantasy adventuring, set in a land filled with monsters, fabulous treasures, great warriors, and magicians. The scene is set in the ruins of a mighty kingdom, now inhabited by sparse groups of natives and swarms of monsters. Beneath it all are the rich remnants of a magical civilization, scattered and lost across the map.<br />\r\nTo this scene come the adventurers, seekers of riches and fame, to make a name for themselves in this promising field. Swordsman and Dwarf, Magician and Sorceror, the humans and the half-humans come seeking to loot the legendary riches of a lost civilization. Now you can play the part of one of these adventurers, stepping into an unknown Realm of magic and monsters, battles and treasures.</p>\r\n\r\n<p>As a player, you will take on the role of one of the sixteen major characters who are represented in detail in the game. You will control where he goes, what he tries to do, how he handles himself in combat, and much more. In the course of the game, you will run into deadly monsters, tribes of humans ranging from old friends to sworn enemies, and treasures that will enhance your abilities in many ways.</p>\r\n\r\n<p><strong>MAGIC REALM</strong> is a complex game designed to recapture the suspense and desperate struggles of fantasy literature. The game creates a small but complete fantasy world, where each game is a new adventure with a new map where everything lies hidden at new locations. The game includes many more playing pieces than are actually used in a single playing. The additional pieces are set up and can appear, depending on the directions in which the characters explore, but many of the treasure troves, treasures, and spells will still be set up, unfound, when the game ends, and many of the monsters and natives might never be met. The result is an extremely unpredictable game full of surprises, a game that plays very differently each time it is played.<br />\r\nThe complete game system includes hiking, hiding and searching, fatigue, wounds, rest, trade, hiring natives, and combat between characters, monsters, and natives using a variety of weapons on horseback and afoot, as well as many magical effects.</p>\r\n\r\n<p>Between exploring a new land where the mountains, caves, valleys, and woods change every game, and not knowing what you will find in each place, you will find each game a new and unpredictable adventure, filled with surprises. You will find this like no other board game you have ever played.</p>\r\n\r\n<p>Avalon Hill Complexity rating - 9</p>",
            "description_preview": " From the 2nd edition rulebook intro for  MAGIC REALM : \r\n\r\n  MAGIC REALM  is a game of fantasy adventuring, set in a land filled with monsters, fabulous treasures, great warriors, and magicians. The scene is set in the ruins of a mighty kingdom, now inhabited by sparse groups of natives and swarms of monsters. Beneath it all are the rich remnants of a magical civilization, scattered and lost across the map. \r\nTo this scene come the adventurers, seekers of riches and fame, to make a name for themselves in this promising field. Swordsman and Dwarf, Magician and Sorceror, the humans and the half-humans come seeking to loot the legendary riches of a lost civilization. Now you can play the part of one of these adventurers, stepping into an unknown Realm of magic and monsters, battles and treasures. \r\n\r\n As a player, you will take on the role of one of the sixteen major characters who are represented in detail in the game. You will control where he goes, what he tries to do, how he handles himself in combat, and much more. In the course of the game, you will run into deadly monsters, tribes of humans ranging from old friends to sworn enemies, and treasures that will enhance your abilities in many ways. \r\n\r\n  MAGIC REALM  is a complex game designed to recapture the suspense and desperate struggles of fantasy literature. The game creates a small but complete fantasy world, where each game is a new adventure with a new map where everything lies hidden at new locations. The game includes many more playing pieces than are actually used in a single playing. The additional pieces are set up and can appear, depending on the directions in which the characters explore, but many of the treasure troves, treasures, and spells will still be set up, unfound, when the game ends, and many of the monsters and natives might never be met. The result is an extremely unpredictable game full of surprises, a game that plays very differently each time it is played. \r\nThe complete game system includes hiking, hiding and searching, fatigue, wounds, rest, trade, hiring natives, and combat between characters, monsters, and natives using a variety of weapons on horseback and afoot, as well as many magical effects. \r\n\r\n Between exploring a new land where the mountains, caves, valleys, and woods change every game, and not knowing what you will find in each place, you will find each game a new and unpredictable adventure, filled with surprises. You will find this like no other board game you have ever played. \r\n\r\n Avalon Hill Complexity rating - 9 ",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545534980121",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545534980121",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1545534980121",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1545534980121",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1545534980121",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1545534980121",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545534980121"
            },
            "url": "https://www.boardgameatlas.com/search/game/CE58EHbQ66",
            "price": "0.00",
            "msrp": "0.00",
            "discount": "0.00",
            "primary_publisher": "The Avalon Hill Game Co",
            "publishers": [
                "The Avalon Hill Game Co",
                "Hobby Japan"
            ],
            "mechanics": [
                {
                    "id": "PGjmKGi26h"
                },
                {
                    "id": "U3zhCQH7Et"
                },
                {
                    "id": "EVeAdboGUA"
                },
                {
                    "id": "DEvPj5twid"
                },
                {
                    "id": "XM2FYZmBHH"
                }
            ],
            "categories": [],
            "designers": [
                "Richard Hamblen"
            ],
            "developers": [],
            "artists": [
                "George Goebel",
                "Kim Grommel",
                "Richard Hamblen",
                "Randall C. Reed",
                "Chris White (I)"
            ],
            "names": [],
            "num_user_ratings": 3,
            "average_user_rating": 2,
            "official_url": null,
            "rules_url": null,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 5,
            "reddit_week_count": 0,
            "reddit_day_count": 0
        },
        {
            "id": "MActjnZiWb",
            "name": "The Magic Labyrinth Board Game",
            "year_published": null,
            "min_players": null,
            "max_players": null,
            "min_playtime": null,
            "max_playtime": null,
            "min_age": null,
            "description": "89100 Features: -Game.-Wizards and magical theme.-Sharpen your memory and show your skill as you navigate the maze and win the master wizard's favor. Assembly Instructions: -Assembly required.",
            "description_preview": "89100 Features: -Game.-Wizards and magical theme.-Sharpen your memory and show your skill as you navigate the maze and win the master wizard's favor. Assembly Instructions: -Assembly required.",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257491262-61X9IfCYMTL.jpg",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257491262-61X9IfCYMTL.jpg",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257491262-61X9IfCYMTL.jpg",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257491262-61X9IfCYMTL.jpg",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257491262-61X9IfCYMTL.jpg",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257491262-61X9IfCYMTL.jpg",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257491262-61X9IfCYMTL.jpg"
            },
            "url": "https://www.boardgameatlas.com/search/game/MActjnZiWb",
            "price": "44.99",
            "msrp": "0.00",
            "discount": "0.00",
            "primary_publisher": "Playroom Entertainment",
            "publishers": [
                "Playroom Entertainment"
            ],
            "mechanics": [],
            "categories": [],
            "designers": [],
            "developers": [],
            "artists": [],
            "names": [
                "The Magic Labyrinth"
            ],
            "num_user_ratings": 9,
            "average_user_rating": 2.666666666666666,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 3,
            "reddit_week_count": 0,
            "reddit_day_count": 0
        },
        {
            "id": "KE2x1nEIHG",
            "name": "The Classic Dungeons & Dragons Game: Epic Adventures With Wizards, Dragons, and Magic!",
            "year_published": null,
            "min_players": null,
            "max_players": null,
            "min_playtime": null,
            "max_playtime": null,
            "min_age": null,
            "description": "Publication Date: May 1994 \nSeries: The Classic Dungeons & Dragons Game\n\nThe Classic Dungeons & Dragons Game Boxed Set: Epic Adventures With Wizards, Dragons, and Magic!\n\nHardcover: 210 pages \nPublisher: Wizards of the Coast (May 1994) \nLanguage: English \nISBN-10: 1560768207 \nISBN-13: 978-1560768203 \nProduct Dimensions: 12 x 9.2 x 2.1 inches",
            "description_preview": "Publication Date: May 1994 \nSeries: The Classic Dungeons & Dragons Game\n\nThe Classic Dungeons & Dragons Game Boxed Set: Epic Adventures With Wizards, Dragons, and Magic!\n\nHardcover: 210 pages \nPublisher: Wizards of the Coast (May 1994) \nLanguage: English \nISBN-10: 1560768207 \nISBN-13: 978-1560768203 \nProduct Dimensions: 12 x 9.2 x 2.1 inches",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257567323-318IwaNt-3L.jpg",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257567323-318IwaNt-3L.jpg",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257567323-318IwaNt-3L.jpg",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257567323-318IwaNt-3L.jpg",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257567323-318IwaNt-3L.jpg",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257567323-318IwaNt-3L.jpg",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257567323-318IwaNt-3L.jpg"
            },
            "url": "https://www.boardgameatlas.com/search/game/KE2x1nEIHG",
            "price": "100.00",
            "msrp": "0.00",
            "discount": "0.00",
            "primary_publisher": "Wizards of the Coast",
            "publishers": [
                "Wizards of the Coast"
            ],
            "mechanics": [],
            "categories": [],
            "designers": [],
            "developers": [],
            "artists": [],
            "names": [],
            "num_user_ratings": 0,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 3,
            "reddit_week_count": 0,
            "reddit_day_count": 0
        },
        {
            "id": "dHMnGfnS3G",
            "name": "Duel Decks: Anthology - Jace vs Chandra - Elves vs Goblins - Divine vs Demonic - Garruk vs Liliana - Magic the Gathering (MTG)",
            "year_published": null,
            "min_players": null,
            "max_players": null,
            "min_playtime": null,
            "max_playtime": null,
            "min_age": null,
            "description": "Never before have so many gathered in one place. These will be fights to remember! These eight, ready-to-play, 60-card Magic decks showcase our first four dueling match-ups. Rejoin the fray as the game's most famous Planeswalkers go head to head. Relive the Divine clashing with the Demonic, and Elves confronting Goblins. Replay the original duels, or mix and match the combatants to create new battles across the Multiverse. Contents and Details: Duel Decks: Anthology contains all eight decks from the first four Duel Decks products (each containing 60 cards): Duel Decks: Elves vs. Goblins Duel Decks: Jace vs. Chandra Duel Decks: Divine vs. Demonic Duel Decks: Garruk vs. Liliana",
            "description_preview": "Never before have so many gathered in one place. These will be fights to remember! These eight, ready-to-play, 60-card Magic decks showcase our first four dueling match-ups. Rejoin the fray as the game's most famous Planeswalkers go head to head. Relive the Divine clashing with the Demonic, and Elves confronting Goblins. Replay the original duels, or mix and match the combatants to create new battles across the Multiverse. Contents and Details: Duel Decks: Anthology contains all eight decks from the first four Duel Decks products (each containing 60 cards): Duel Decks: Elves vs. Goblins Duel Decks: Jace vs. Chandra Duel Decks: Divine vs. Demonic Duel Decks: Garruk vs. Liliana",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257743959-41reZD3HQ-L.jpg",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257743959-41reZD3HQ-L.jpg",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257743959-41reZD3HQ-L.jpg",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257743959-41reZD3HQ-L.jpg",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257743959-41reZD3HQ-L.jpg",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257743959-41reZD3HQ-L.jpg",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257743959-41reZD3HQ-L.jpg"
            },
            "url": "https://www.boardgameatlas.com/search/game/dHMnGfnS3G",
            "price": "221.00",
            "msrp": "0.00",
            "discount": "0.00",
            "primary_publisher": "Wizards of the Coast",
            "publishers": [
                "Wizards of the Coast"
            ],
            "mechanics": [],
            "categories": [],
            "designers": [],
            "developers": [],
            "artists": [],
            "names": [],
            "num_user_ratings": 0,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 3,
            "reddit_week_count": 0,
            "reddit_day_count": 0
        },
        {
            "id": "R0Zv6sMDJg",
            "name": "Magic Maze: Maximum Security",
            "year_published": 2018,
            "min_players": 1,
            "max_players": 8,
            "min_playtime": 15,
            "max_playtime": 20,
            "min_age": 8,
            "description": "For some time now, the Magic Maze has been regularly robbed by unscrupulous adventurers, who incessantly steal from the same four shops. How strange! Due to this alarming observation, Management has installed new security systems to dissuade any further dishonest deeds.The Maximum Security expansion not only brings the mall guards of Magic Maze to life, but provides a number of other modules to allow you to customize your experience. There are two different types of modules: helpers and challenges, which decrease or increase the difficulty. You will be guided step by step through all of the modules, and each of them comes with a tutorial that will help you practise the new rules before adding it to your real games of Magic Maze.",
            "description_preview": "For some time now, the Magic Maze has been regularly robbed by unscrupulous adventurers, who incessantly steal from the same four shops. How strange! Due to this alarming observation, Management has installed new security systems to dissuade any further dishonest deeds.The Maximum Security expansion not only brings the mall guards of Magic Maze to life, but provides a number of other modules to allow you to customize your experience. There are two different types of modules: helpers and challenges, which decrease or increase the difficulty. You will be guided step by step through all of the modules, and each of them comes with a tutorial that will help you practise the new rules before adding it to your real games of Magic Maze.",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540856857003",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540856857003",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1540856857003",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1540856857003",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1540856857003",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1540856857003",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540856857003"
            },
            "url": "https://www.boardgameatlas.com/search/game/R0Zv6sMDJg",
            "price": "29.99",
            "msrp": "29.99",
            "discount": "0.00",
            "primary_publisher": "Dude Games",
            "publishers": [
                "Dude Games",
                "Sit Down!"
            ],
            "mechanics": [
                {
                    "id": "9mNukNBxfZ"
                },
                {
                    "id": "qu5BcGjAzk"
                },
                {
                    "id": "U3zhCQH7Et"
                },
                {
                    "id": "XM2FYZmBHH"
                }
            ],
            "categories": [],
            "designers": [
                "Kasper Lapp"
            ],
            "developers": [],
            "artists": [
                "Gyom"
            ],
            "names": [],
            "num_user_ratings": 0,
            "official_url": "https://dude.games/catalogue/product/DGMM02?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=5cc_ads",
            "rules_url": null,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 1,
            "reddit_week_count": 0,
            "reddit_day_count": 0
        },
        {
            "id": "nQlceWd7NJ",
            "name": "Magic Maze Kids",
            "year_published": 2018,
            "min_players": 2,
            "max_players": 4,
            "min_playtime": 15,
            "max_playtime": 25,
            "min_age": 5,
            "description": "<p>The king was accidentally turned into a frog! Gather your friends, stride across the forest, and find the correct ingredients to prepare a potion that will cure him.</p>\r\n\r\n<p><em><strong>Magic Maze Kids</strong></em> is a cooperative game that makes the original mechanisms of <em>Magic Maze</em> accessible to young players. Everyone controls all of the heroes, but only in one direction! Tutorials gradually teach you the rules, and several levels make the game evolve with the children.</p>",
            "description_preview": " The king was accidentally turned into a frog! Gather your friends, stride across the forest, and find the correct ingredients to prepare a potion that will cure him. \r\n\r\n   Magic Maze Kids   is a cooperative game that makes the original mechanisms of  Magic Maze  accessible to young players. Everyone controls all of the heroes, but only in one direction! Tutorials gradually teach you the rules, and several levels make the game evolve with the children. ",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545110759660",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545110759660",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1545110759660",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1545110759660",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1545110759660",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1545110759660",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545110759660"
            },
            "url": "https://www.boardgameatlas.com/search/game/nQlceWd7NJ",
            "price": "0.00",
            "msrp": "0.00",
            "discount": "0.00",
            "primary_publisher": "Sit Down!",
            "publishers": [
                "Sit Down!",
                "2Tomatoes",
                "Pegasus Spiele"
            ],
            "mechanics": [
                {
                    "id": "9mNukNBxfZ"
                },
                {
                    "id": "qu5BcGjAzk"
                },
                {
                    "id": "lA3KUtVFCy"
                },
                {
                    "id": "XM2FYZmBHH"
                }
            ],
            "categories": [],
            "designers": [
                "Kasper Lapp"
            ],
            "developers": [],
            "artists": [
                "Gyom"
            ],
            "names": [],
            "num_user_ratings": 0,
            "official_url": null,
            "rules_url": null,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 1,
            "reddit_week_count": 1,
            "reddit_day_count": 0
        },
        {
            "id": "M0XIHho1qY",
            "name": "2016 Planechase Anthology - Magic the Gathering",
            "year_published": null,
            "min_players": null,
            "max_players": null,
            "min_playtime": null,
            "max_playtime": null,
            "min_age": null,
            "description": "Planechase Anthology showcases cards, both Planar and normal, from Planechase and Planechase (2012 Edition). Planechase Anthology will contain the following: Four ready-to-play 60-card decks from Planechase (2012 Edition), each with eight rare cards. 86 oversized Planar cards, four slide deck boxes, oversize slide deck box, 35 double-sided token cards, special edition planar die, four spindown life counters, strategy insert.",
            "description_preview": "Planechase Anthology showcases cards, both Planar and normal, from Planechase and Planechase (2012 Edition). Planechase Anthology will contain the following: Four ready-to-play 60-card decks from Planechase (2012 Edition), each with eight rare cards. 86 oversized Planar cards, four slide deck boxes, oversize slide deck box, 35 double-sided token cards, special edition planar die, four spindown life counters, strategy insert.",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1542823279485",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1542823279485",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1542823279485",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1542823279485",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1542823279485",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1542823279485",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1542823279485"
            },
            "url": "https://www.boardgameatlas.com/search/game/M0XIHho1qY",
            "price": "111.94",
            "msrp": "0.00",
            "discount": "0.00",
            "publishers": [],
            "mechanics": [],
            "categories": [],
            "designers": [],
            "developers": [],
            "artists": [],
            "names": [],
            "num_user_ratings": 0,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 0,
            "reddit_week_count": 0,
            "reddit_day_count": 0
        },
        {
            "id": "7NIaByayf5",
            "name": "Killer Bunnies Violet Booster",
            "year_published": null,
            "min_players": null,
            "max_players": null,
            "min_playtime": null,
            "max_playtime": null,
            "min_age": null,
            "description": "A brand new type of bunny is introduced in the KB Quest Violet Booster Deck -- Specialty Bunnies, which make taking double turns a snap! Spoofed from various pop-culture sources, not only will the new bunnies give you a chuckle, but they will also speed the game up and allow players to do more on each turn! The strategy deepens with Insight (to give players a chance to view the top 5 small Carrot Cards), Bunnies In Black (to prevent your bunnies from getting abducted by the Beyea Aliens), Low Jack Kojak (to annoy opponents by making them return Carrots to Kaballa's Market), and four more Carrots - now there are 20 to collect!",
            "description_preview": "A brand new type of bunny is introduced in the KB Quest Violet Booster Deck -- Specialty Bunnies, which make taking double turns a snap! Spoofed from various pop-culture sources, not only will the new bunnies give you a chuckle, but they will also speed the game up and allow players to do more on each turn! The strategy deepens with Insight (to give players a chance to view the top 5 small Carrot Cards), Bunnies In Black (to prevent your bunnies from getting abducted by the Beyea Aliens), Low Jack Kojak (to annoy opponents by making them return Carrots to Kaballa's Market), and four more Carrots - now there are 20 to collect!",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257218102-51-hUiUDOfL.jpg",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257218102-51-hUiUDOfL.jpg",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257218102-51-hUiUDOfL.jpg",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257218102-51-hUiUDOfL.jpg",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257218102-51-hUiUDOfL.jpg",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257218102-51-hUiUDOfL.jpg",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257218102-51-hUiUDOfL.jpg"
            },
            "url": "https://www.boardgameatlas.com/search/game/7NIaByayf5",
            "price": "12.75",
            "msrp": "0.00",
            "discount": "0.00",
            "primary_publisher": "Playroom Ent",
            "publishers": [
                "Playroom Ent"
            ],
            "mechanics": [],
            "categories": [],
            "designers": [],
            "developers": [],
            "artists": [],
            "names": [
                "Killer Bunnies and the Quest for the Magic Carrot: VIOLET Booster"
            ],
            "num_user_ratings": 2,
            "average_user_rating": 1,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 0,
            "reddit_week_count": 0,
            "reddit_day_count": 0
        },
        {
            "id": "BjIPtrYpk8",
            "name": "The Hunted: A Game of Medieval Magic, Mischief, and Mayhem",
            "year_published": null,
            "min_players": null,
            "max_players": null,
            "min_playtime": null,
            "max_playtime": null,
            "min_age": null,
            "description": "<p>The Hunted is a game which takes place in Medieval Times when fear of the supernatural was rampant. What’s worse is that the supernatural could be hidden in any disguise a friend, a sister, a son. The community leaders would do just about anything to keep the seed of heresy from spreading in their communities. This incidentally, is where our “heroes” come in.</p> <p>Players are normal townspeople who have been given magical powers and abilities from a Mystical Benefactor. They have been given one objective in return for their newfound power: Chaos.</p> <p>They must take care however, if they are caught there are dire consequences for stepping outsided of society’s boundries. Even if they manage to evade the notice of the authorities, the community will react in greater force to the strange happenings, the inexplicable bad fortune that seems to have befallen the town and the disappearances. Can our troublemakers complete their mission of disrupting a community or will they be rooted out by the powers that be? Will they become the hunters or... The Hunted?</p> <p><b>The Game:</b></p> <p>Mystical Benefactors</p> <p>There are currently 8 Mystical Benefactors to choose from for a given campaign. Each has their own special abilities and unique spells when they are active. This makes The Hunted have great replayability.</p> <p><b>Avoid Suspicion</b></p> <p>Players attempt to complete the objective, take down all three Authority Figures, while pretending to live a normal life. Players must pay taxes (10 Coins every Tuesday) and generally just stay out of trouble whilst carrying out their hazardous misdeeds.</p> <p><b>Chaos</b></p> <p>To grow stronger, players must commit disruptive acts upon the community to earn Chaos Points. Chaos Points are used to purchase Spells and Familiars (Animals bound to you by the Dark Benefactor that will obey your every order.) Chaos Points can be earned by:</p> <p> Destroying property Converting villagers to join your cult Sacrificing Animals and villagers Taking down Authority Figures And other generally blasphemous things</p? <p>Players can work together or separately to gain Chaos Points. However, at the end of one week, the player who has earned the most Chaos points is rewarded greatly by the Dark Benefactor, while the player who earns the least is punished. This adds an element of competitiveness to the general cooperative spirit of the game.</p> <p><b>Paranoia</b></p> <p>Should a character be noticed doing something strange, they will gain Paranoia Points. Paranoia Points indicate how suspicious the villagers are of that player being a heretic. Players will have increasingly harsh sanctions set against them as their paranoia score rises, such as the townspeople watching them more closely or their house being searched for heretical paraphernalia, eventually ending in their execution for heresy. Players can reduce Paranoia by doing things that are expected of them, like going to church or being a nice person, these things usually come at the cost of Chaos Points, bringing a delicate balance of Paranoia and Chaos that players must manage. Typically, it is best to be able to not be noticed or to be able to talk your way out of a dicey situation.</p> <p>Even if players do manage not to be noticed, villagers will begin to notice the unexplained happenings, the disappearances, and the downright spooky things that seem to be happening around them lately. The village itself has a Paranoia score that raises when something cannot be explained or something clearly supernatural happens. When this score rises, the Authority Figures become increasingly frantic to find and kill the heretics among them. Lowering the Town Paranoia can be difficult, so players must take care with their actions. If the Town Paranoia is too high, for too long, the village will be purged by the Church and the players lose the game.</p>",
            "description_preview": " The Hunted is a game which takes place in Medieval Times when fear of the supernatural was rampant. What’s worse is that the supernatural could be hidden in any disguise a friend, a sister, a son. The community leaders would do just about anything to keep the seed of heresy from spreading in their communities. This incidentally, is where our “heroes” come in.   Players are normal townspeople who have been given magical powers and abilities from a Mystical Benefactor. They have been given one objective in return for their newfound power: Chaos.   They must take care however, if they are caught there are dire consequences for stepping outsided of society’s boundries. Even if they manage to evade the notice of the authorities, the community will react in greater force to the strange happenings, the inexplicable bad fortune that seems to have befallen the town and the disappearances. Can our troublemakers complete their mission of disrupting a community or will they be rooted out by the powers that be? Will they become the hunters or... The Hunted?    The Game:    Mystical Benefactors   There are currently 8 Mystical Benefactors to choose from for a given campaign. Each has their own special abilities and unique spells when they are active. This makes The Hunted have great replayability.    Avoid Suspicion    Players attempt to complete the objective, take down all three Authority Figures, while pretending to live a normal life. Players must pay taxes (10 Coins every Tuesday) and generally just stay out of trouble whilst carrying out their hazardous misdeeds.    Chaos    To grow stronger, players must commit disruptive acts upon the community to earn Chaos Points. Chaos Points are used to purchase Spells and Familiars (Animals bound to you by the Dark Benefactor that will obey your every order.) Chaos Points can be earned by:    Destroying property Converting villagers to join your cult Sacrificing Animals and villagers Taking down Authority Figures And other generally blasphemous things Players can work together or separately to gain Chaos Points. However, at the end of one week, the player who has earned the most Chaos points is rewarded greatly by the Dark Benefactor, while the player who earns the least is punished. This adds an element of competitiveness to the general cooperative spirit of the game.    Paranoia    Should a character be noticed doing something strange, they will gain Paranoia Points. Paranoia Points indicate how suspicious the villagers are of that player being a heretic. Players will have increasingly harsh sanctions set against them as their paranoia score rises, such as the townspeople watching them more closely or their house being searched for heretical paraphernalia, eventually ending in their execution for heresy. Players can reduce Paranoia by doing things that are expected of them, like going to church or being a nice person, these things usually come at the cost of Chaos Points, bringing a delicate balance of Paranoia and Chaos that players must manage. Typically, it is best to be able to not be noticed or to be able to talk your way out of a dicey situation.   Even if players do manage not to be noticed, villagers will begin to notice the unexplained happenings, the disappearances, and the downright spooky things that seem to be happening around them lately. The village itself has a Paranoia score that raises when something cannot be explained or something clearly supernatural happens. When this score rises, the Authority Figures become increasingly frantic to find and kill the heretics among them. Lowering the Town Paranoia can be difficult, so players must take care with their actions. If the Town Paranoia is too high, for too long, the village will be purged by the Church and the players lose the game. ",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257316604-51TjtU65xzL.jpg",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257316604-51TjtU65xzL.jpg",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257316604-51TjtU65xzL.jpg",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257316604-51TjtU65xzL.jpg",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257316604-51TjtU65xzL.jpg",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257316604-51TjtU65xzL.jpg",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257316604-51TjtU65xzL.jpg"
            },
            "url": "https://www.boardgameatlas.com/search/game/BjIPtrYpk8",
            "price": "15.00",
            "msrp": "0.00",
            "discount": "0.00",
            "primary_publisher": "Tim Obermueller",
            "publishers": [
                "Tim Obermueller"
            ],
            "mechanics": [],
            "categories": [],
            "designers": [],
            "developers": [],
            "artists": [],
            "names": [],
            "num_user_ratings": 0,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 0,
            "reddit_week_count": 0,
            "reddit_day_count": 0
        },
        {
            "id": "GUBUwcbSQC",
            "name": "Killer Bunnies Red Booster",
            "year_published": null,
            "min_players": null,
            "max_players": null,
            "min_playtime": null,
            "max_playtime": null,
            "min_age": null,
            "description": "Killer Bunnies are back, and no one is safe with new Red bunnies, each having a special power. The Red Booster Deck adds 55 cards to your existing set plus a red twelve-sided die. Other fantastic new cards include: Rooney's Weapons Emporium to give players a second Killer Bunnies market to buy back used weapons, Defense Cards to eliminate weapons, Barriers to protect your bunnies from Roaming Run cards, and four new Carrots! Can you defeat the Quite Irascible Diffractable Cheese Balls' Send bunnies three rounds ahead in time with Bunny To The Future. The laughs continue as this wild and wacky Red Booster Deck delivers more intense strategy and even more Carrot grabbin' fun!",
            "description_preview": "Killer Bunnies are back, and no one is safe with new Red bunnies, each having a special power. The Red Booster Deck adds 55 cards to your existing set plus a red twelve-sided die. Other fantastic new cards include: Rooney's Weapons Emporium to give players a second Killer Bunnies market to buy back used weapons, Defense Cards to eliminate weapons, Barriers to protect your bunnies from Roaming Run cards, and four new Carrots! Can you defeat the Quite Irascible Diffractable Cheese Balls' Send bunnies three rounds ahead in time with Bunny To The Future. The laughs continue as this wild and wacky Red Booster Deck delivers more intense strategy and even more Carrot grabbin' fun!",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257403005-61n82mevutL.jpg",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257403005-61n82mevutL.jpg",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257403005-61n82mevutL.jpg",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257403005-61n82mevutL.jpg",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257403005-61n82mevutL.jpg",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257403005-61n82mevutL.jpg",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257403005-61n82mevutL.jpg"
            },
            "url": "https://www.boardgameatlas.com/search/game/GUBUwcbSQC",
            "price": "14.90",
            "msrp": "0.00",
            "discount": "0.00",
            "primary_publisher": "Playroom Entertainment",
            "publishers": [
                "Playroom Entertainment"
            ],
            "mechanics": [],
            "categories": [],
            "designers": [],
            "developers": [],
            "artists": [],
            "names": [
                "Killer Bunnies and the Quest for the Magic Carrot: RED Booster"
            ],
            "num_user_ratings": 2,
            "average_user_rating": 2,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 0,
            "reddit_week_count": 0,
            "reddit_day_count": 0
        },
        {
            "id": "tHsPVlK78G",
            "name": "Magic the Gathering: Spellslinger Starter Kit 2018",
            "year_published": null,
            "min_players": null,
            "max_players": null,
            "min_playtime": null,
            "max_playtime": null,
            "min_age": null,
            "description": "The Spellslinger Starter Kit is a new option for beginners to get a smooth introduction into Magic. It comes with two Standard-legal 60-card decks-designed to create an interactive learning experience for two.",
            "description_preview": "The Spellslinger Starter Kit is a new option for beginners to get a smooth introduction into Magic. It comes with two Standard-legal 60-card decks-designed to create an interactive learning experience for two.",
            "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1541023670884",
            "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1541023670884",
            "images": {
                "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1541023670884",
                "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1541023670884",
                "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1541023670884",
                "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1541023670884",
                "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1541023670884"
            },
            "url": "https://www.boardgameatlas.com/search/game/tHsPVlK78G",
            "price": "14.99",
            "msrp": "14.99",
            "discount": "0.00",
            "primary_publisher": "Wizards of the Coast",
            "publishers": [
                "Wizards of the Coast"
            ],
            "mechanics": [],
            "categories": [],
            "designers": [],
            "developers": [],
            "artists": [],
            "names": [],
            "num_user_ratings": 0,
            "matches_specs": null,
            "spec": [],
            "reddit_all_time_count": 0,
            "reddit_week_count": 0,
            "reddit_day_count": 0
        }];
    }
}