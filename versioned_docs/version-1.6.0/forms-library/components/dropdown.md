---
id: dropdown
title: Dropdown
sidebar_label: Dropdown
---

Dropdown also known as Select, is used to choose an item from a collection of options.


``` ts
VStack(
    DropDown(item =>
        Text(item.year)
    )(selectedItem =>
        Text(selectedItem.year)
    )
    .placeholder("Some hints")
    .model(Your data)
)
```
