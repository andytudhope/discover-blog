# Make Ghost Great Again

Embed ObservableHQ Notebooks into your Ghost blog posts so that people can play with Maths while reading cool crypto things.

Oh my!

## Use This Template To Embed ObservableHQ Notebooks in Ghost

1. Create your observablehq notebook. Here is an [example](https://observablehq.com/@andytudhope/embedded-discover).
2. In the top right corner of the page, you'll see the traditional 3 little dots for more options. Click this and choose `Download tarball`.
3. `git clone git@github.com:andytudhope/discover-blog.git && cd discover-blog`
4. Swap out the current tarball for your own notebook, and name it appropriately in line 54 of `package.json`.
5. `npm i`
6. Change the import in line 4 in `src/App.jsx` to reflect your change from step 4..
7. Alter all the runtime modules to instead create `Inspectors` for the variables you're expecting from your notebook (lines 11-28) and make sure to `createRef`'s for each of them.
8. Use some appropriate tool to export your blog content to HTML (I use a plugin for Google Docs, it's super easy). 
9. Paste that in over the current content and use the same form as shown on lines 167-173 to import cells from your observable notebook.
10. Run `npm run start` to check your blog post in your local browser.
11. Once you are happy with that, run `npm run build`.
12. Copy-paste the output in `build/index.html`, open a new blog post in Ghost, choose to embed HTML, paste it there and Bob's Your Uncle.