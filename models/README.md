# Documentation

## DynamicSection

| Field | Type | Description | Nullable |
|---|---|---|---|
| header | String | The section header title | true |
| footer | String | The section footer text | true |
| rows | [DynamicRow] | The rows of the section | false |

## DynamicRow

| Field | Type | Description | Nullable |
|---|---|---|---|
| title | String | The row title | false |
| subtitle | String | The row subtitle | true |
| url | String | URL, as string, to be shown when row is touched | true |
| content | DynamicContent | The content to be shown when row is touched, if the URL is null | true |

## DynamicContent

| Field | Type | Description | Nullable |
|---|---|---|---|
| title | String | The content title | true |
| sections | [DynamicSection] | The sections to be displayed | false |

## Example

```json
{
    "header": "Section header",
    "footer": "Section footer",
    "rows": [{
        "title": "Row title 1",
        "subtitle": "Row subtitle 1",
        "content": {
            "title": "Content Title",
            "sections": [{
                "header": "Section without footer",
                "footer": null,
                "rows": [{
                    "title": "Row without subtitle",
                    "subtitle": null
                }]
            }]
        }
    },
    {
        "title": "Warren Website",
        "subtitle": "Row subtitle 2",
        "url": "http://www.warrenbrasil.com"
    }]
}

```