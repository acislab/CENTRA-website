# US-EA CENTRA website

http://useacentra.org/

## To Update Content:

Browse the repository in github.

1. Find the Markdown file (.md) that corresponds to the page you wish to edit.
2. Click on the filename to view the contents.
3. Click the "Edit this file" button which has an icon of a pencil on it. Edit the content by writing Markdown.
Note: The github editor will not understand the Jekyll yaml front matter or the Liquid template syntax, so you will not have full WYSIWYG preview capability.
4. When finished, click the "Commit Changes" button near the bottom of the page, also hopefully supplying a meaningful commit message. Use the default choice "Commit directly to the gh-pages branch".
5. Wait a few moments (usually less than 15 seconds) for the content to be parsed, processed, and published before refreshing the site in your browser.

Adding new navigation menu items and whole new pages is a bit more complicated, some understanding Jekyll and Bootstrap is recommended.

## More Details

Most of the content source files are written in Markdown and then processed by Jekyll.

Markdown is simple for humans to write (no open and close tags like HTML) but has only limited formatting options.

See:

https://guides.github.com/features/mastering-markdown/


Beyond a standard Markdown file, Jekyll requires additional yaml "front matter" in the header area and also
allows dynamic properties via the Liquid templating language. 

For example, the site's "index.html" is generated from the "index.md" file that contains yaml front matter
and the Jekyll-Bootstrap helper near the top.

The meaningful content of index.md in this example is an image logo (with some special sauce to use bootstrap responsive features),
a level 2 heading, and a paragraph:


```markdown
---
layout: page
title: "Home"
description: ""
---
{% include JB/setup %}

![](us-ea-centra-logo.png){: class="img-responsive" }

## Meetings and News

The kickoff meeting for the CENTRA activities is scheduled to take place in March 2016 in Taiwan.

```

Advanced styling can frequently be applied by adding special syntax in curly braces immediately after the element.
In the previous example, the Bootstrap class named "img-responsive" was applied to the image.

In the following example, the Bootstrap class named "table" is applied to the table.

```markdown
|  col1  |  col2  |
| ------ | ------ |
| data 1 | data 2 |
{: class="table" }
```

# More examples

Note that the "advanced" styling options are optional and specific to the Bootstrap theme currently being used by *this* site.

## Links

Any http web link will end up as a clickable link in the output. To give a link a "friendly name" you would use the extra style markup:

```markdown
This is a link to the [ACIS website](http://acis.ufl.edu).
```

Will look something like:

This is a link to the [ACIS website](http://acis.ufl.edu).


## Images

Once an image has been added to the repo, it can be included in a page with the following syntax, where the "Alt Text" is optional and the "image url" is a relative path (preferred) or a full URL:


```markdown
![Alt Text](image url)
```

Take the main logo as an example. We don't need an "Alt Text" in this case (Accessibility standards) and the image is sitting in the top level directory so we don't need any path information. We want the image to resize automatically on small screens and mobile so we use the img-responsive class provided by Bootstrap. Our source image was a little big so we want to set the maximum width to 1000px. Thus, we use a combination of Markdown with additional html embedded immediately after:

```markdown
![](us-ea-centra-logo.png){: class="img-responsive" width="1000px"}
```



# Jekyll-Bootstrap

The quickest way to start and publish your Jekyll powered blog. 100% compatible with GitHub pages

## Usage

For all usage and documentation please see: <http://jekyllbootstrap.com>

## Version

0.3.0 - stable and versioned using [semantic versioning](http://semver.org/).

**NOTE:** 0.3.0 introduces a new theme which is not backwards compatible in the sense it won't _look_ like the old version.
However, the actual API has not changed at all.

**Jekyll-Bootstrap Documentation Website.**

The documentation website at <http://jekyllbootstrap.com> is maintained at https://github.com/plusjade/jekyllbootstrap.com
