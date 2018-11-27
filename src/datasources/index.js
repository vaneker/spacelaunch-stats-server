/**
 * datasources are classes that encapsulate all of the data fetching logic ,as well
 * as caching and deduplication, for a particular service.
 *
 * Reducers transform the data into the shape defined by the schema.
 *
 */

import LaunchAPI from './spacexdata/launch';

export default LaunchAPI;