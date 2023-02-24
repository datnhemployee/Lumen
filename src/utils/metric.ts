const ZOOM = 1;
const METRIC_WITHOUT_ZOOM = {
  ICON_MEDIUM: 24,
  ICON_LARGE: 40,

  BORDER: 1,
  TINY: 8,
  SMALL: 16,
  MEDIUM: 24,
  LARGE: 32,
  HUGE: 40,

  PROGRESS_HEIGHT: 4,
  DOT: 12,

  ELEVATION_SMALL: 5,

  RADIUS_BUTTON: 4,
  RADIUS_SMALL: 4,

  PROMOTION_IMAGE_HEIGHT: 98,
};

const withZoom = <T extends typeof METRIC_WITHOUT_ZOOM>(metric: T) =>
  Object.keys(metric).reduce(
    (metricWithZoom, key) => ({
      ...metricWithZoom,
      [key]: metric[key as keyof typeof METRIC_WITHOUT_ZOOM] * ZOOM,
    }),
    {},
  ) as T;

const METRIC = withZoom(METRIC_WITHOUT_ZOOM);

export default METRIC;
