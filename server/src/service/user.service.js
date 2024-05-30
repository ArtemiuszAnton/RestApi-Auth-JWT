const { createUserDB, updateUserByIdDB, getUserDB, getUserByIdDB } = require('../repository/user.repository');

const createUser = async (name, surname, email, password) => {
    const data = await createUserDB(name, surname, email, password);
    return data
}

const updateUserById = async (id, name, surname, email, password) => {
    const data = await updateUserByIdDB(id, name, surname, email, password);
    return data
}

const getUser = async () => {
    const data = await getUserDB();
    return data;
};

const getUserById = async (id) => {
    const data = await getUserByIdDB(id);
    return data;
};



module.exports = { createUser, updateUserById, getUserById, getUser }