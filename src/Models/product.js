/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const db = require("../Configs/db")
const product = {}

product.getProd = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT id_product, name_product, price_product, name_category, image_product FROM public.product
            INNER JOIN public.categories ON (public.product.id_category = public.categories.id)
            ORDER BY id_product ASC`)
            .then((res) => {
                if (res.rows.length == 0) {
                    resolve("Data is empty");
                }
                else {
                    resolve(res.rows);
                }
            }).catch((err) => {
                reject(err);
            });
    })
}

product.searchProd = (name) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT id_product, name_product, price_product, name_category, image_product FROM public.product
            INNER JOIN public.categories ON (public.product.id_category = public.categories.id)
            WHERE name_product LIKE '%${name}%'`)
            .then((res) => {
                if (res.rows.length == 0) {
                    resolve("Data not found")
                }
                else {
                    resolve(res.rows)
                }
            }).catch((err) => {
                reject(err)
            });
    })
}

product.orderedProd = (orderBy = 'name', order = 'ASC') => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT id_product, name_product, price_product, name_category, image_product FROM public.product
                INNER JOIN public.categories ON (public.product.id_category = public.categories.id)
                ORDER BY ${orderBy} ${order}`)
            .then((res) => {
                resolve(res.rows)
            }).catch((err) => {
                reject(err)
            });
    })
}

product.addProd = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT id_product, name_product, price_product, name_category, image_product FROM public.product
            INNER JOIN public.categories ON (public.product.id_category = public.categories.id)
            WHERE name_product = '${data.name}'`)
            .then((res) => {
                if (res.rows.length == 0) {
                    db.query(`INSERT INTO public.product(name_product, price_product, id_category, image_product)
                        VALUES ('${data.name}', ${data.price}, ${data.idCategory}, '${data.image}')`)
                    resolve(data)
                }
                else {
                    resolve("Data already exists")
                }
            }).catch((err) => {
                reject(err);
            });
    })
}

product.updateProd = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE public.product SET name_product = '${data.name}', price_product = ${data.price}, id_category = ${data.idCategory}, image_product = '${data.image}' WHERE id_product = ${data.id};`)
            .then((res) => {
                resolve(data)
            }).catch((err) => {
                reject(err);
            });
    })
}

product.delProd = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.product WHERE id_product = ${id};`)
            .then((res) => {
                resolve(`Data with ID = ${id} was deleted`)
            }).catch((err) => {
                reject(err);
            });
    })
}

module.exports = product