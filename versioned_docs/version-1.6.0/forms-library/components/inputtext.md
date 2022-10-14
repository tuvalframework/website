---
id: inputtext
title: InputText
sidebar_label: InputText
---

Text fields let users enter and edit text.


``` ts
VStack(
    Toggle()
)
```

#### Multiline

Unless the rows prop is set, the height of the text field dynamically matches its content

``` ts
VStack(
    Toggle().multiline(true)
)
```

#### Placeholder

The placeholder attribute specifies a short hint that describes the expected value of an input field (e.g. a sample value or a short description of the expected format)

``` ts
VStack(
    Toggle().placeholder("Some hints")
)
```