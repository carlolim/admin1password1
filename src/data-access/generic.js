import { hasValue } from "../helpers/functions";

const databaseName = "Admin1Password1";


export const selectById = (table, id) => {
    return new Promise((resolve, reject) => {
        let db = indexedDB.open(databaseName);
        db.onsuccess = (event) => {
            let tx = event.target.result.transaction([table], "readonly");
            let store = tx.objectStore(table);
            let result = store.get(id);
            result.onsuccess = (event) => {
                resolve(event.target.result);
            }
        }
    });
}

export const selectAll = (table) => {
    return new Promise((resolve, reject) => {
        let db = indexedDB.open(databaseName);
        db.onsuccess = (event) => {
            let tx = event.target.result.transaction([table], "readonly");
            let store = tx.objectStore(table);
            let allItems = store.getAll();
            allItems.onsuccess = (event) => {
                resolve(event.target.result);
            }
        }
    });
}

export const insert = (table, data) => {
    return new Promise((resolve, reject) => {
        let db = indexedDB.open(databaseName);
        db.onsuccess = (event) => {
            let tx = event.target.result.transaction([table], "readwrite");
            let store = tx.objectStore(table);
            var request = store.put(data);
            request.onsuccess = (event) => {
                resolve(event.target.result);
            }
            request.onerror = (event) => {
                reject(0);
            }
        }
    });
}


export const update = (table, data) => {
    return new Promise((resolve, reject) => {
        let db = indexedDB.open(databaseName);
        db.onsuccess = (event) => {
            let tx = event.target.result.transaction([table], "readwrite");
            let store = tx.objectStore(table);
            store.put(data);
            tx.oncomplete = (event) => {
                resolve(true);
            }
            tx.onerror = (event) => {
                reject(false);
            }
        }
    });
}

export const remove = (table, id) => {
    return new Promise((resolve, reject) => {
        let db = indexedDB.open(databaseName);
        db.onsuccess = (event) => {
            let tx = event.target.result.transaction([table], "readwrite");
            let store = tx.objectStore(table);
            store.delete(id);
            tx.oncomplete = (event) => {
                resolve(true);
            }
            tx.onerror = (event) => {
                reject(false);
            }
        }
    });
}

export const selectWhere = (table, field, value) => {
    return new Promise((resolve, reject) => {
        let db = indexedDB.open(databaseName);
        db.onsuccess = (event) => {
            var range = IDBKeyRange.bound(value, value);
            var tx = event.target.result.transaction([table], "readonly");
            let store = tx.objectStore(table);
            var request = store.index(field).openCursor(range);
            request.onsuccess = (event) => {
                if (hasValue(event.target.result))
                    resolve(event.target.result.value);
                else
                    resolve(null);
            }
            request.onfailure = (event) => {
                reject(null);
            }
        }
    });
}