# Change log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

* Added peer count to new peer list.
* Added the dot matrix dojo type.

### Removed

* Stripped out the inter-client chat feature. Players have to find each other using external means anyway. The intent is just to make it possible to moderate a remote synchronous game, and it is expected that players will be on Discord or something. It also frees up more horizontal space for koans.

## [0.2.1] - 2022-07-14

### Added

* The expanded koan screen now includes the text used to generate the koan (doesn't apply to image or text koans, but will be applied to any future koan types where text is interpreted).
* Added `title` element to the SVGs containing the generating string. This should appear on hover in modern browsers.

### Changed

* Condensed chat bar to make more room for koans.
* Renamed `2dpyramids` to `1dpyramids`.

## [0.2.0] - 2022-07-13

### Added

* Added `2dpyramids` dojo type.
* Added a "Reject Koan" button for the master.
* You can now click on non-text koans to expand them.

## [0.1.0] - 2022-07-10

Initial alpha release.