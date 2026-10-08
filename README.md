# Universal Graphics Designer

A mobile-friendly, browser-based graphics studio built with the Canvas API.

## Current capabilities

- Text, rectangles, circles, lines and image placement
- Responsive canvas sizes for social, story, video and custom designs
- Dragging, resize handles, rotation and alignment guides
- Multi-selection and group movement
- Layers with reordering, visibility and locking
- Typography controls including font, weight, alignment, line height and letter spacing
- Image fit modes and visual filters
- Undo/redo history
- Copy, paste, duplicate and keyboard nudging
- PNG, SVG and editable project export
- Project import with image assets preserved as data URLs
- Local autosave-ready document model
- Mobile-friendly responsive interface

## Project format

Projects use a versioned JSON document model. Image assets are stored in the project as data URLs instead of temporary `blob:` URLs, so reopening a saved project can reconstruct its images correctly.

## Next development targets

- Richer shapes, gradients and shadows
- Group/ungroup as a first-class document feature
- Frames, icons and reusable design elements
- More templates and brand kits
- Stronger SVG fidelity and text layout
- Optional AI-assisted design generation
