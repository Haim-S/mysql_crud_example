

exports.Queries = 
    {
    command_findAll: `SELECT * FROM <table_name>`,
    command_findAll_InnerJoin: `SELECT <key_value> FROM <mytable_name> INNER JOIN
     <ref_table_name> on <mytable_name_dot_key> = <ref_table_name_dot_key>`,
    command_create:  `INSERT INTO <table_name> (<key_value>) VALUES (<question_mark>)`,
    command_delete: `DELETE FROM <table_name> WHERE id = ?`,
    command_update: `UPDATE <table_name> SET <key_value>  WHERE id = ?`,
};





exports.QueriesDB = 
{
        command_create: ` INSERT INTO hospital(hero_id) (SELECT id FROM heroes WHERE active = 0);`,
        command_alter: `ALTER TABLE <table_name> add column <column_type> tinyint(1) default 1`
};



exports.QueriesStoreProcedure = 
    {
        create_procedure:
        `
        CREATE PROCEDURE IF NOT EXISTS <procedureName>() 
        BEGIN
        <command>
        END
        `
};


