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

For example, the "index.html" is generated from the "index.md" file that contains the yaml front matter
and the Jekyll-Bootstrap helper near the top.

The content is only an image logo (with some special sauce to use bootstrap responsive features),
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

Advanced styling (via Bootstrap) can frequently be applied by adding the appropriate class immediately following
the markdown element with the appropriate bootstrap class:

```markdown
|  col1  |  col2  |
| ------ | ------ |
| data 1 | data 2 |
{: class="table" }
```
Which makes a table that looks like:

|  col1  |  col2  |
| ------ | ------ |
| data 1 | data 2 |
{: class="table" }


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
