const { read_Db, write_Db } = require("./db_functions");

const data_object = {
    name: 'liam',
    favourite_numbers: [3, 8]
}

write_Db(data_object) 