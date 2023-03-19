

exports.Queries = 
    {
    command_findAll: `SELECT * FROM <table_name>`,
    command_create:  `INSERT INTO <table_name> (<key_value>) VALUES (<question_mark>)`,
    command_delete: `DELETE FROM <table_name> WHERE id = ?`,
    command_update: `UPDATE <table_name> SET <key_value>  WHERE id = ?`,
};





exports.QueriesDB = 
    {
        command_create: ` INSERT INTO hospital(hero_id) (SELECT id FROM heroes WHERE active = 0);`
    
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


