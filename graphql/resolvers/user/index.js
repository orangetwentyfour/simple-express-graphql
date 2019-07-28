import User from '../../../models/user';

export default {
    Query: {
        user: (_root, args) => {
            return new Promise((resolve, reject) => {
                User.findOne(args).exec((err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
            });
        },

        users: () => {
            return new Promise((resolve, reject) => {
                User.find().exec((err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
            });
        }
    },
    Mutation: {
        addUser: (_root, { name, email }) => {
            return new Promise((resolve, reject) => {
                User.create({ name, email }).then(user => {
                    resolve(user.toObject());
                }).catch(err => reject(err));
            });
        },
        editUser: (_root, { _id, name, email }) => {
            return new Promise((resolve, reject) => {
                User.findOneAndUpdate({ _id }, { name, email }).exec((err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
            });
        },
        deleteUser: (_root, { _id }) => {
            return new Promise((resolve, reject) => {
                User.findOneAndRemove({ _id }).exec((err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
            });
        }
    }
}