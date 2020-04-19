// Nome
const getName = function (store) {
    let name = store.properties.name;
    return '<header><h4>' + name + '</h4></header>';
};

// Indirizzo
const getAddress = function (store) {
    let address = store.properties.address.lines;
    return '<p class="storeInfo getAddress"><strong>'+gettext("Address")+'</strong><br />' + address + '</p>';
};

const getAddressNoTitle = function (store) {
    let address = store.properties.address.lines;
    return '<p class="storeInfo getAddressNoTitle">' + address + '</p>';
};

// Sito e email
const getContacts = function (store) {
    let phone = store.properties.contact.phone;
    let email = store.properties.contact.email;
    let website = store.properties.contact.website;
    let html = "";
    // html += getPhone(store);
    if (phone) html += '<a href="tel:' + phone + '" class="btn">'+gettext('Phone')+'</a>';
    if (email) html += '<a href="mailto:' + email + '" class="btn">'+gettext("Email")+'</a>';
    if (website) html += '<a href="' + website + '" class="btn">'+gettext("Website")+'</a>';
    return '<div class="">' + html + '</div><br>';
};

// Zone
const getShipsToWhere = function (store) {
    let where = store.properties.user_properties.where;
    if (where) return '<p class="storeInfo getShipsToWhere"><strong>'+gettext("Area")+'</strong><br />' + where.replace('\n', '<br>') + '</p>';
};

// Costi
const getShipsToCost = function (store) {
    let cost = store.properties.user_properties.cost;
    if (cost) return '<p class="storeInfo getShipsToCost"><strong>'+gettext("Cost")+'</strong><br />' + cost.replace('\n', '<br>') + '</p>';
};

const getCategories = function (store) {
    const getCategories = store.properties.tags[0];
    const getOtherCats = store.properties.user_properties.other_cats;
    if (getCategories == 'Autre') {
        return '<p class="storeInfo getCategories"><strong>'+gettext("Category")+'</strong><br />' + getCategories + ': ' + getOtherCats + '</p>';
    } else {
        return '<p class="storeInfo getCategories"><strong>'+gettext("Category")+'</strong><br />' + getCategories + '</p>';
    }
};

const getCategoriesNoTitle = function (store) {
    const getCategories = store.properties.tags[0];
    const getOtherCats = store.properties.user_properties.other_cats;
    // if (getOtherCats) other_cats = '<strong>:</strong> ' + getOtherCats;
    // return '<p class="storeInfo getCategories">'+getCategories+'</p>'; */
    if (getCategories == 'Autre') {
        return '<p class="storeInfo getCategoriesNoTitle"><i>' + getCategories + ': ' + getOtherCats + '</i></p><p class="storeInfo getCategoriesNoTitleBtn"><i>Info &raquo;</i></p>';
    } else {
        return '<p class="storeInfo getCategoriesNoTitle"><i>' + getCategories + '</i></p><p class="storeInfo getCategoriesNoTitleBtn"><i>Info &raquo;</i></p>';
    }
};

const getServices = function (store) {
    const services = store.properties.user_properties.services;
    if (services) return '<p class="storeInfo getServices"><strong>'+gettext("Other Services")+'</strong><br />' + services + '</p>';
};
