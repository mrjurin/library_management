// Copyright (c) 2024, phisoft and contributors
// For license information, please see license.txt

frappe.ui.form.on("Book", {
	onload(frm) {
        msgprint("refresh")

        
	},
    refresh(frm) {
        frm.add_custom_button(__("Get From Api"), function () {
            frappe.call({
                method: "library_management.library_management.library_management.doctype.book.book.get_books_from_api",
                callback: function(r) {
                    console.log(r.message)
                }
            })
        });
    }
});
