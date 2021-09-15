---
title: 'Laravel Migrations - How to create new tables, add new columns and update columns in your production database.'
longdate: 'September 15, 2021'
date: '2021-09-15'
keywords: 'laravel, database, migrations, php'
---

I've been working on more legacy projects recently, something I've never been exposed to until my current job. I learned quickly that one of the unfortunate tasks that go hand in hand with maintaining a legacy project is eventually you will need to make updates to the database schema. I've run into a few of these situations in the recent weeks, again prior to this, this is something I've never done. Working with production databases can certainly be nerve racking but thankfully [Laravel](https://laravel.com/) allows us to perform these changes with little stress.

## Creating a new table

Let's start off with the easiest and least frightening update, creating a new table. No relationships or anything fancy here, just a new table.

If you've done any research on this topic before now you may have noticed there's a common naming convention that is used for migrations in Laravel. This is because Laravel uses the name of the migration you provide to try and build as much of the migration as it can for you. It will determine not only the name of the table you're looking to interact with but also if you are in fact looking to create that table.

For our example, let's create a new table that will contain information for Pokémon _(silly I know but fun)_. If we follow one of the rules in this preferred naming convention, the name for your migration would be `create_pokemon_table`. This tells Laravel we are looking to **create** a table and it should be called `pokemon`.

So if we run the `make:migration` command using our name:

```bash
php artisan make:migration create_pokemon_table
```

The following migration has been generated for us. Laravel has properly named our class, set up the migration to use the `create` method and filled the `name` argument with the information we provided in the name.

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePokemonTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pokemon', function (Blueprint $table) {
			$table->id();
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('pokemon');
	}
}
```

From here you can add all of your table definitions.

```php
public function up()
{
	Schema::create('pokemon', function (Blueprint $table) {
		$table->id();
		$table->string('name');
		$table->integer('hp');
		$table->integer('pokedex_number');
		$table->timestamps();
	});
}
```

Now that we have our migration all configured with the name of the table and the data we want it to store, we can now run our migrate command and we should have our new Pokémon table available to us.

```bash
php artisan migrate
```

## Adding a new column

Now let's say we're at a point in our application where it has grown and we need a new column added to a table. We will keep with the Pokémon example. We now need to store the height and weight for each Pokémon inside of our `pokemon` table. But our application is already in production and has data stored within it, so we are no longer able to just update our initial `CreatePokemonTable` migration. To add these columns we will need to create a new migration.

We can again take advantage of a specific naming convention to have Laravel help us generate this migration. If we say we want to add something _to pokemon_, `add_height_weight_to_pokemon`, Laravel will again fill in our migration with the name of the table we are looking to target, `pokemon`.

```bash
php artisan make:migration add_height_weight_to_pokemon
```

> Note: We could also pass the `--table` option if we wanted to specifically call out the table we are targeting or if we needed to target a different table entirely. `make:migration add_height_weight_to_pokemon --table=pokemon`

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHeightWeightToPokemon extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('pokemon', function (Blueprint $table) {
				//
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('pokemon', function (Blueprint $table) {
				//
		});
	}
}
```

Let's define our new height and weight columns and run our migrate command.

```php
public function up()
{
	Schema::table('pokemon', function (Blueprint $table) {
		$table->integer('height');
		$table->integer('weight');
	});
}
```

```bash
php artisan migrate
```

Our `pokemon` table will now have 2 new columns for height and weight.

> Note: Within these example migrations we are using the bare bone basics. There are plenty of [column modifiers](https://laravel.com/docs/8.x/migrations#column-modifiers) you may want to consider adding to your column definitions depending on your specific needs. Such as giving the new column(s) a default value upon creation. Or allowing the column to contain `null` values with the `nullable` modifier.

## Modifying a column

Alright, we've now created a new table, added new columns onto a table. Now how about changing some aspect of a column within a table? I'm sure you guessed it, we will use a new migration to achieve this. In order to perform these types of migrations however we will need to install an additional package. `doctrine/dbal`.

```bash
composer require doctrine/dbal
```

We have now realized, we made a mistake. We've defined our height and weight columns as integers instead of a data type that will give us more precision like a floating type would provide. We would like to update these columns to be decimal types instead.

Just like with our other migration names, we can strategically name our migration so that Laravel helps us out a little. Here, if we specify we want to change something _in pokemon_, `change_height_weight_columns_in_pokemon`, Laravel will again scaffold some of our migration for us.

```bash
php artisan make:migration change_height_weight_columns_in_pokemon
```

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeHeightWeightColumnsInPokemon extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('pokemon', function (Blueprint $table) {
				//
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('pokemon', function (Blueprint $table) {
				//
		});
	}
}
```

The way we change our column types is similar to the way we initially defined our column types. We just need to call the `change` method at the end of our new definition.

Let's make our columns have a type of decimal and set its size and precision. 

```php
public function up()
{
	Schema::table('pokemon', function (Blueprint $table) {
		$table->decimal('height', 5, 2)->change();
		$table->decimal('weight', 5, 2)->change();
	});
}
```

If we run our migrations one final time, we have now changed our height and weight columns to be of type decimal and can now more accurately store information for our Pokémon. 

Just be aware when changing data types on columns. It can have some adverse reactions depending on the type you're changing from and to. In our case, all integers that were previously stored in our height and weight columns will have been converted to decimal point numbers and have `.00` appended to them.

## Continue Learning
What we've just worked through is meant to simply open the door into how we can safely and confidently interact with our production databases. I encourage you to take these concepts and dive deeper into what [Laravel migrations](https://laravel.com/docs/8.x/migrations) can do.  