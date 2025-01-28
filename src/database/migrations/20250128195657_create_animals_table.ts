import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('animals', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('type').notNullable();
    table.string('breed').notNullable();
    table.string('age').notNullable();
    table.string('weight').notNullable();
    table.boolean('castred').notNullable();
    table.string('photo').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('animals');
}

