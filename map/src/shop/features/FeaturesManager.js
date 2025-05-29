import { ReactComponent as OfflineIcon } from '../../assets/features/ic_action_offline_navigation_colored.svg';
import { ReactComponent as FollowTrackIcon } from '../../assets/features/ic_action_follow_track_colored.svg';
import { ReactComponent as CrossBuyIcon } from '../../assets/features/ic_action_cross_buy_colored_day.svg';
import { ReactComponent as SettingsCloudIcon } from '../../assets/features/ic_action_settings_cloud_colored.svg';
import { ReactComponent as CloudUploadIcon } from '../../assets/features/ic_action_cloud_upload_colored_day.svg';
import { ReactComponent as WidgetsIcon } from '../../assets/features/ic_action_advanced_widgets_colored_day.svg';
import { ReactComponent as Track3dIcon } from '../../assets/features/ic_action_3dtrack_colored.svg';
import { ReactComponent as UmbrellaIcon } from '../../assets/features/ic_action_umbrella_colored.svg';
import { ReactComponent as MapUpdatesIcon } from '../../assets/features/ic_action_map_updates_colored_day.svg';
import { ReactComponent as MonthlyUpdatesIcon } from '../../assets/features/ic_action_monthly_map_updates_colored_day.svg';
import { ReactComponent as UnlimitedDownloadsIcon } from '../../assets/features/ic_action_unlimited_downloads_colored_day.svg';
import { ReactComponent as Relief3dIcon } from '../../assets/features/ic_action_3d_relief_colored_day.svg';
import { ReactComponent as SrtmIcon } from '../../assets/features/ic_action_srtm_colored_day.svg';
import { ReactComponent as CarplayIcon } from '../../assets/features/ic_action_srtm_colored_day.svg';
import { ReactComponent as VehicleMetricsIcon } from '../../assets/features/ic_action_vehicle_metrics_colored_day.svg';
import { ReactComponent as ExternalSensorIcon } from '../../assets/features/ic_action_external_sensor_colored_day.svg';
import { ReactComponent as WikimediaIcon } from '../../assets/features/ic_action_srtm_colored_day.svg';
import { ReactComponent as WikipediaDownloadIcon } from '../../assets/features/ic_action_wikipedia_download_colored_day.svg';
import { ReactComponent as BackpackIcon } from '../../assets/features/ic_action_backpack_colored_day.svg';
import { ReactComponent as NauticalChartsIcon } from '../../assets/features/ic_action_nautical_charts_colored.svg';
import { ReactComponent as NauticalDepthIcon } from '../../assets/features/ic_action_nautical_depth_colored_day.svg';

export const features = [
    {
        id: 'offline_navigation',
        name: 'web:feature_offline_navigation',
        desc: 'web:feature_offline_navigation_desc',
        icon: <OfflineIcon />,
        category: 'Features',
    },
    {
        id: 'navigation_by_planned_tracks',
        name: 'web:feature_navigation_by_planned_tracks',
        desc: 'web:feature_navigation_by_planned_tracks_desc',
        icon: <FollowTrackIcon />,
        category: 'Features',
    },
    {
        id: 'cross_platform',
        name: 'web:feature_cross_platform',
        desc: 'web:feature_cross_platform_desc',
        icon: <CrossBuyIcon />,
        category: 'Features',
    },
    {
        id: 'settings_favorites_sync',
        name: 'web:feature_settings_favorites_sync',
        desc: 'web:feature_settings_favorites_sync_desc',
        icon: <SettingsCloudIcon />,
        category: 'Backup & Sync',
    },
    {
        id: 'osmand_cloud_backup',
        name: 'web:feature_osmand_cloud_backup',
        desc: 'web:feature_osmand_cloud_backup_desc',
        icon: <BackpackIcon />,
        category: 'Backup & Sync',
    },
    {
        id: 'advanced_route_coloring',
        name: 'web:feature_advanced_route_coloring',
        desc: 'web:feature_advanced_route_coloring_desc',
        icon: <WidgetsIcon />,
        category: 'Pro Features',
    },
    {
        id: 'elevation_profile',
        name: 'web:feature_elevation_profile',
        desc: 'web:feature_elevation_profile_desc',
        icon: <CloudUploadIcon />,
        category: 'Pro Features',
    },
    {
        id: '3d_track_view',
        name: 'web:feature_3d_track_view',
        desc: 'web:feature_3d_track_view_desc',
        icon: <Track3dIcon />,
        category: 'Pro Features',
    },
    {
        id: 'weather_forecast',
        name: 'web:feature_weather_forecast',
        desc: 'web:feature_weather_forecast_desc',
        icon: <UmbrellaIcon />,
        category: 'Pro Features',
    },
    {
        id: 'live_updates',
        name: 'web:feature_live_updates',
        desc: 'web:feature_live_updates_desc',
        icon: <MapUpdatesIcon />,
        category: 'Map download and updates',
    },
    {
        id: 'monthly_map_updates',
        name: 'web:feature_monthly_map_updates',
        desc: 'web:feature_monthly_map_updates_desc',
        icon: <MonthlyUpdatesIcon />,
        category: 'Map download and updates',
    },
    {
        id: 'unlimited_map_downloads',
        name: 'web:feature_unlimited_map_downloads',
        desc: 'web:feature_unlimited_map_downloads_desc',
        icon: <UnlimitedDownloadsIcon />,
        category: 'Map download and updates',
    },
    {
        id: '3d_relief',
        name: 'web:feature_3d_relief',
        desc: 'web:feature_3d_relief_desc',
        icon: <Relief3dIcon />,
        category: 'Topography',
    },
    {
        id: 'contour_lines',
        name: 'web:feature_contour_lines',
        desc: 'web:feature_contour_lines_desc',
        icon: <SrtmIcon />,
        category: 'Topography',
    },
    {
        id: 'terrain_visualization',
        name: 'web:feature_terrain_visualization',
        desc: 'web:feature_terrain_visualization_desc',
        icon: <CarplayIcon />,
        category: 'Topography',
    },
    {
        id: 'android_auto_and_apple_carplay',
        name: 'web:feature_android_auto_and_apple_carplay',
        desc: 'web:feature_android_auto_and_apple_carplay_desc',
        icon: <CarplayIcon />,
        category: 'Vehicle Integration & Connectivity',
    },
    {
        id: 'vehicle_metrics_obd_ii',
        name: 'web:feature_vehicle_metrics_obd_ii',
        desc: 'web:feature_vehicle_metrics_obd_ii_desc',
        icon: <VehicleMetricsIcon />,
        category: 'Vehicle Integration & Connectivity',
    },
    {
        id: 'external_sensors',
        name: 'web:feature_external_sensors',
        desc: 'web:feature_external_sensors_desc',
        icon: <ExternalSensorIcon />,
        category: 'Vehicle Integration & Connectivity',
    },
    {
        id: 'wikimedia_photos',
        name: 'web:feature_wikimedia_photos',
        desc: 'web:feature_wikimedia_photos_desc',
        icon: <WikimediaIcon />,
        category: 'Wikipedia & Travel guides',
    },
    {
        id: 'offline_wikipedia',
        name: 'web:feature_offline_wikipedia',
        desc: 'web:feature_offline_wikipedia_desc',
        icon: <WikipediaDownloadIcon />,
        category: 'Wikipedia & Travel guides',
    },
    {
        id: 'offline_wikivoyage',
        name: 'web:feature_offline_wikivoyage',
        desc: 'web:feature_offline_wikivoyage_desc',
        icon: <CloudUploadIcon />,
        category: 'Wikipedia & Travel guides',
    },
    {
        id: 'nautical_map_view',
        name: 'web:feature_nautical_map_view',
        desc: 'web:feature_nautical_map_view_desc',
        icon: <CloudUploadIcon />,
        category: 'Nautical',
    },
    {
        id: 'nautical_navigation',
        name: 'web:feature_nautical_navigation',
        desc: 'web:feature_nautical_navigation_desc',
        icon: <NauticalChartsIcon />,
        category: 'Nautical',
    },
    {
        id: 'nautical_depth',
        name: 'web:feature_nautical_depth',
        desc: 'web:feature_nautical_depth_desc',
        icon: <NauticalDepthIcon />,
        category: 'Nautical',
    },
];

export const planFeatures = {
    'osmand-start': [
        'offline_navigation',
        'navigation_by_planned_tracks',
        'cross_platform',
        'settings_favorites_sync',
        'wikimedia_photos',
    ],
    'osmand-maps-plus': [
        'offline_navigation',
        'navigation_by_planned_tracks',
        'cross_platform',
        'settings_favorites_sync',
        'monthly_map_updates',
        'unlimited_map_downloads',
        'contour_lines',
        'terrain_visualization',
        'android_auto_and_apple_carplay',
        'vehicle_metrics_obd_ii',
        'external_sensors',
        'wikimedia_photos',
        'offline_wikipedia',
        'offline_wikivoyage',
        'nautical_map_view',
        'nautical_navigation',
        'nautical_depth',
    ],
    'osmand-pro': [
        'offline_navigation',
        'navigation_by_planned_tracks',
        'cross_platform',
        'settings_favorites_sync',
        'osmand_cloud_backup',
        'advanced_route_coloring',
        'elevation_profile',
        '3d_track_view',
        'weather_forecast',
        'live_updates',
        'monthly_map_updates',
        'unlimited_map_downloads',
        '3d_relief',
        'contour_lines',
        'terrain_visualization',
        'android_auto_and_apple_carplay',
        'vehicle_metrics_obd_ii',
        'external_sensors',
        'wikimedia_photos',
        'offline_wikipedia',
        'offline_wikivoyage',
        'nautical_map_view',
        'nautical_navigation',
        'nautical_depth',
    ],
};
