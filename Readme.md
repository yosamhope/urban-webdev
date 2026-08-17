# Urban Webdev Project Scan Report

## 1. Project Overview
This project is a static multi-page business website for a web development company. It uses plain HTML, CSS, and JavaScript without a framework or build system.

The site is standardized around the brand name urbanwebdev across the project.

The project structure is organized as a root website with additional nested content folders for portfolio and services.

## 2. Project Structure

Root files:
- index.html — main landing page
- about.html — About Us page
- contact.html — Contact page
- CNAME — custom domain mapping
- robots.txt — SEO crawler instructions
- Readme.md — project documentation

# Code Citations
## License: unknown
https://github.com/Tmgx/classactivity/tree/13e2fbd0fd17676c8fdb2d1920efc2b2abdd1539/webpage.html

```
>
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="services.html">Services</a>
            <a href="portfolio.html
```


## License: unknown
https://github.com/webmasudur/looplab/tree/a44c0a8016bb41dc38f2747dd61c58613c105f24/index.html

```
html">About Us</a>
            <a href="services.html">Services</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="contact.html">Contact</a>
        <
```


## License: unknown
https://github.com/ApexQAConsulting/Apex-QA-Consulting/tree/da1f903e4636356807478eab759386088967cb00/contact.html

```
>Home</a>
            <a href="about.html">About Us</a>
            <a href="services.html">Services</a>
            <a href="portfolio.html">Portfolio</a>
            <a href
```



Assets:
- assets/styles/styles.css — main shared stylesheet
- assets/styles/about.css — about page styling
- assets/styles/portfolio.css — portfolio page styling
- assets/js/script.js — shared JavaScript
- assets/brand-logo/ — brand assets
- assets/icons/ — icon files

Nested pages:
- portfolio/portfolio.html — project showcase page
- services/services.html — service and pricing page

## 3. File-by-File Summary

### index.html
Purpose:
- Home page for the business website
- Contains hero section, benefits, CTA buttons, and custom inline CSS

Observations:
- It references the stylesheet at ./assets/styles/styles.css, which is correct for the root folder.
- It contains heavy inline CSS blocks mixed into the page, which makes maintenance harder.
- It now clearly presents the urbanwebdev brand and professional marketing text.
- It has a long paragraph that reads like a business value statement rather than placeholder copy.
- It mixes multiple design systems and repeated CSS selectors.
- It includes a footer CTA section and other sections that may not match the rest of the design.

### about.html
Purpose:
- Company story, mission, values, and team presentation

Observations:
- It links to ./styles/styles.css and ./styles/about.css, which are wrong relative paths when the file is in the project root.
- The correct stylesheet path should be ./assets/styles/styles.css and ./assets/styles/about.css.
- The page content is now written as finished business copy instead of placeholder draft text.
- The team section uses real content and avoids broken local image references.
- The animation code is inline and works only if the page structure matches the CSS class names.

### contact.html
Purpose:
- Contact page with a Google Form embed

Observations:
- It loads the stylesheet with ./styles/styles.css, which is invalid from the project root.
- The correct path should be ./assets/styles/styles.css.
- The page is structurally simple and mostly complete.
- The contact phone and location footer are present and useful.
- It uses Google Form embedding as a practical contact mechanism.

### portfolio/portfolio.html
Purpose:
- Portfolio showcase page for sample projects

Observations:
- This file sits inside a portfolio folder, so relative paths must be adjusted for asset files.
- It references ./styles/styles.css and ./styles/portfolio.css, which are not present in that folder.
- It should likely point to ../assets/styles/styles.css and ../assets/styles/portfolio.css.
- The portfolio markup uses live placeholder imagery instead of missing local files.
- The portfolio section contains class names and toggling logic that are suitable for a real project showcase.

### services/services.html
Purpose:
- Service listing and pricing section

Observations:
- This file also sits in a nested services folder and uses wrong relative stylesheet paths.
- It contains an invalid duplicated HTML structure: a second <!DOCTYPE html>, <html>, <head>, and <body> inside the original page.
- This is a major structural problem that can break rendering in browsers.
- It contains a pricing section with multiple cards and styling, but the page is not properly organized into a single valid document.
- It looks like content was copied from a template and inserted into an existing page without cleanup.

### assets/styles/styles.css
Purpose:
- Main global theme for the site

Observations:
- This is the primary shared stylesheet, and it contains global navigation, hero, CTA, section, and responsive styles.
- The styles are not fully aligned with the pages, and there are repeated or conflicting rules.
- Some classes appear to be overwritten or conflicting across pages, especially on home and nested page designs.
- The navigation style has unusual settings such as position: center (which is not valid for positioning) and a duplicated .navbar rule.
- The hero section contains a conflicting rule .hero { background-color:red; } following the gradient background, which overrides the intended blue styling.

### assets/styles/about.css
Purpose:
- Styling for the About page

Observations:
- It contains a coherent design system specific to the About page.
- The page-specific positioning and animations are reasonable but not connected to the shared style system consistently.
- It is valid CSS but could be simplified to reduce duplication and align with the main theme.

### assets/styles/portfolio.css
Purpose:
- Styling for the portfolio page

Observations:
- This file is structured well for a portfolio layout.
- It defines the portfolio banner, filter buttons, cards, and responsive behavior.
- It is likely intended to work with the nested portfolio page once the paths are corrected.

### assets/js/script.js
Purpose:
- Shared JavaScript for animation and contact form behavior

Observations:
- It contains reasonable common behavior: IntersectionObserver for scroll animations and contact form submission handling.
- However, the script is not attached to the HTML pages, so the functionality is not active on the site.
- Existing HTML pages rely on inline scripts instead of the shared script file.

## 4. Major Issues Found

### 1. Broken relative asset paths
This is the most serious issue.

The project has all CSS files under assets/styles, but several pages refer to paths like:
- ./styles/styles.css
- ./styles/about.css
- ./styles/portfolio.css

These paths are invalid from the root or nested folders. Correct versions should be:
- root pages: ./assets/styles/styles.css
- nested portfolio page: ../assets/styles/styles.css
- nested services page: ../assets/styles/styles.css

### 2. Nested pages use incorrect folder assumptions
- portfolio/portfolio.html is inside a folder named portfolio, so it cannot use ./styles/...
- services/services.html is inside a folder named services, so it cannot use ./styles/...

Paths must be adjusted according to location.

### 3. Duplicate and invalid HTML structure in services.html
The file contains multiple HTML documents embedded into one another. This breaks semantics and likely causes browser parsing issues.

It contains:
- a second <!DOCTYPE html>
- another <html> and <head>
- another <body>

This should be cleaned into a single valid document.

### 4. Shared JavaScript is unused
The file assets/js/script.js contains useful script logic, but no page includes it.

This means:
- intersection animations are not centralized
- contact form logic may not run as expected
- the site is using a mix of inline scripts and disconnected logic

### 5. Placeholder and unfinished content
The project no longer relies on missing local placeholder assets or draft copy in the main content sections.

### 6. Branding consistency
The business identity is now standardized to urbanwebdev across the main project pages and page titles.

### 7. CSS conflicts and duplication
The index page contains multiple inline <style> blocks and also loads a global stylesheet. This leads to conflicts and makes the site harder to maintain.

The main global stylesheet also contains overlapping selectors and some invalid/overwritten rules such as:
- .navbar { position: center; }
- .hero { background-color:red; }

### 8. Missing local image assets
The project references images that do not appear to exist in the current folder structure:
- no stale placeholder image names remain in the page file references

This will result in broken visuals unless the actual files are added or replaced.

## 5. Recommended Fixes

### Structural fixes
1. Place all page stylesheet references to the correct asset paths.
2. Convert nested pages to valid relative paths from their folders.
3. Remove duplicate HTML structure from services.html.
4. Keep one single document structure per page.

### Content fixes
1. Replace placeholders with real business content.
2. Standardize site branding to one name and consistent titles.
3. Replace missing image references with valid files or remove them.

### Script fixes
1. Include assets/js/script.js in pages that need shared behavior.
2. Remove duplicate inline script blocks where possible.
3. Ensure JS selectors target real elements that exist in the page markup.

### Styling fixes
1. Use one CSS source of truth instead of repeated inline styles.
2. Remove conflicting rules and duplicate selectors.
3. Keep global styles in assets/styles/styles.css and page-specific styles in their own files.

## 6. Overall Assessment
The website is a promising static marketing site, but it is currently in a partially assembled state. It contains useful design direction, strong marketing messaging, and a workable structure, but the code quality is inconsistent.

The most important corrections are:
- path fixes
- HTML structure cleanup
- branding consistency
- image and placeholder cleanup
- centralization of CSS and JS

Once those are addressed, the site will be much easier to maintain and will render correctly across all pages.

## 7. Conclusion
This project is best described as a static business website prototype that needs cleanup before deployment. The codebase includes many good ideas and sections, but it currently has broken asset paths, duplicate markup, placeholder content, and inconsistent styling.

The next step should be to standardize the project structure and correct the relative paths before any further design or content work is completed.

# PRETTY URLS
Added pretty URLs to the project by creating folders for each page and moving the HTML files into them. Updated all internal links to point to the new folder structure.


### References
[text](https://www.lnwebworks.com/insight)