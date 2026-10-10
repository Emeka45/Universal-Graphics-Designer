# Universal Graphics Designer

A mobile-friendly, browser-based graphics studio built with the Canvas API.

## Current capabilities

- Text, rectangles, circles, lines and image placement
- Responsive canvas sizes for social, story, video and custom designs
- Dragging, resize handles, rotation and alignment guides
- Multi-selection and group movement
- Layers with reordering, visibility and locking
- Typography controls including font, weight, alignment, line height and letter spacing
- Image crop controls, rectangular/rounded/ellipse masks, fit modes, brightness, contrast, saturation, blur and visual filters
- Freehand pen drawing with editable path objects
- Underlined text styling and expanded type controls
- Undo/redo history
- Copy, paste, duplicate and keyboard nudging
- PNG, JPEG, WebP, SVG and editable project export (raster exports exclude editor selection handles)
- Transparent canvas background for PNG, WebP and SVG exports; JPEG export uses the selected solid background
- Per-layer blend modes including Multiply, Screen, Overlay, Darken, Lighten and Difference
- Custom canvas dimensions plus ready-made social, banner, story and video presets
- Branded vector logo and installable web-app metadata
- Offline app-shell caching with network-first updates when online
- Project import with image assets preserved as data URLs
- Local autosave-ready document model
- Mobile-friendly responsive interface

## Project format

Projects use a versioned JSON document model. Image assets are stored in the project as data URLs instead of temporary `blob:` URLs, so reopening a saved project can reconstruct its images correctly.

## Next development targets

- Full SVG effects parity and richer typography controls
- Vector path editing and boolean shape operations
- Vector path node editing and boolean shape operations
- More reusable templates, frames and brand kits
- Optional AI-assisted design generation (requires a secure service/API integration)
