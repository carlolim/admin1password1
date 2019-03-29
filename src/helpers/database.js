export const initialize = () => {
    var request = window.indexedDB.open("Admin1Password1", 1);
    
    request.onupgradeneeded = function(event) {
        var db = event.target.result;

        if (!db.objectStoreNames.contains('personal')) {
            var table = db.createObjectStore("personal", { keyPath: "personalId", autoIncrement: true });
            table.createIndex("title", "title", { unique: false });
            table.createIndex("templateName", "templateName", { unique: false });
            table.createIndex("amount", "amount", { unique: false });
            table.createIndex("categoryId", "categoryId", { unique: false });
            table.createIndex("accountId", "accountId", { unique: false });
            table.createIndex("description", "description", { unique: false });
        }

        // if (!db.objectStoreNames.contains('budget')) {
        //     var budgetTable = db.createObjectStore("budget", {keyPath: "budgetId", autoIncrement: true});
        //     budgetTable.createIndex("name", "name", { unique: false});
        //     budgetTable.createIndex("repeat", "repeat", { unique: false});
        //     budgetTable.createIndex("startDate", "startDate", { unique: false});
        //     budgetTable.createIndex("endDate", "endDate", { unique: false});
        //     budgetTable.createIndex("amount", "amount", { unique: false});
        //     budgetTable.createIndex("accountIds", "accountIds", { unique: false});
        //     budgetTable.createIndex("isActive", "isActive", { unique: false});
        //     budgetTable.createIndex("categoryIds", "categoryIds", { unique: false});
        //     budgetTable.createIndex("ledger", "ledger", { unique: false});
        //     budgetTable.createIndex("noEndDate", "noEndDate", { unique: false});
        //     budgetTable.createIndex("showInDashboard", "showInDashboard", { unique: false});
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