const Keys = {
  Categories: "categories",
  Items: "items",
}

function getCategories() {
  var cache = $cache.get(Keys.Categories)
  return cache || [$l10n("CATEGORY_COMMON"),]
}

function setCategories(categories) {
  $cache.set(Keys.Categories, categories)
  var items = getAllItems()
  for (key in items) {
    if (categories.indexOf(key) < 0) {
      items[key] = []
    }
  }
  setAllItems(items)
}

function getItems(category) {
  return getAllItems()[category] || ["啊对对对", "啊是是是", "你说得对"]
}

function setItems(category, items) {
  var allItems = getAllItems()
  allItems[category] = items
  setAllItems(allItems)
}

function getAllItems() {
  var cache = $cache.get(Keys.items)
  return cache || {}
}

function setAllItems(items) {
  $cache.set(Keys.items, items)
}

module.exports = {
  getCategories: getCategories,
  setCategories: setCategories,
  getItems: getItems,
  setItems: setItems
}