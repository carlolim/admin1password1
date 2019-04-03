export const initialize = () => {
    var request = window.indexedDB.open("Admin1Password1", 2);
    
    request.onupgradeneeded = function(event) {
        var db = event.target.result;

        if (!db.objectStoreNames.contains('personal')) {
            var table = db.createObjectStore("personal", { keyPath: "personalId", autoIncrement: true });
            table.createIndex("description", "description", { unique: false });
            table.createIndex("firstName", "firstName", { unique: false });
            table.createIndex("lastName", "lastName", { unique: false });
            table.createIndex("middleName", "middleName", { unique: false });
            table.createIndex("contact", "contact", { unique: false });
            table.createIndex("birthday", "birthday", { unique: false });
            table.createIndex("picture", "picture", { unique: false });
            table.createIndex("nationality", "nationality", { unique: false });
            table.createIndex("gender", "gender", { unique: false });
            table.createIndex("religion", "religion", { unique: false });
            table.createIndex("civilStatus", "civilStatus", { unique: false });
        }

        if (!db.objectStoreNames.contains('faceDescriptor')) {
            var table = db.createObjectStore("faceDescriptor", { keyPath: "faceDescriptorId", autoIncrement: true});
            table.createIndex("personalId", "personalId", { unique: false });
            table.createIndex("value", "value", { unique: false });
        }

        //SAMPLE UPGRADE
        // if (!db.objectStoreNames.contains('budget')) {
        //     var budgetTable = db.createObjectStore("budget", {keyPath: "budgetId", autoIncrement: true});
        //     budgetTable.createIndex("name", "name", { unique: false});
        // }
        // else {
        //     var budgetTable = event.currentTarget.transaction.objectStore("budget");
        //     if (!budgetTable.indexNames.contains("showInDashboard")) {
        //         budgetTable.createIndex("showInDashboard", "showInDashboard", { unique: false});
        //     }
        // }
    }

    request.onsuccess = function (event) {
        // var db = event.target.result;

        // //---------------------------------------
        // //create default account (personal)
        // //---------------------------------------
        // var transaction = db.transaction(["account"], "readonly");
        // var accountStore = transaction.objectStore("account");
        // var selectAccounts = accountStore.getAll();
        // transaction.oncomplete = function (event) {            
        //     if (selectAccounts.result.length === 0) {
        //         var addAccountTransaction = db.transaction(["account"], "readwrite");
        //         var accountStore1 = addAccountTransaction.objectStore("account");
        //         accountStore1.put({name: "Personal"});
        //     }
        // }
        // //----------------------------------------------------------------
        // //create default categories (food, transportation, clothing)
        // //----------------------------------------------------------------
        // var categoryTransaction = db.transaction(["category"], "readonly");
        // var categoryStore = categoryTransaction.objectStore("category");
        // var selectCategories = categoryStore.getAll();
        // categoryTransaction.oncomplete = function (event) {
        //     if (selectCategories.result.length === 0) {
        //         var addCategoriesTransaction = db.transaction(["category"], "readwrite");
        //         var addCategoryStore = addCategoriesTransaction.objectStore("category");
        //         addCategoryStore.put({name: "Food"});
        //         addCategoryStore.put({name: "Transportation"});
        //         addCategoryStore.put({name: "Clothing"});
        //     }
        // }
    }
}