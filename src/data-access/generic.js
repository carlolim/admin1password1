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