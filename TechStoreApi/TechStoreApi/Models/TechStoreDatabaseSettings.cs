using System;
namespace TechStoreApi.Models
{
	public class TechStoreDatabaseSettings
	{
		public string ConnectingString { get; set; } = null!;

		public string DatabaseName { get; set; } = null!;

		public string ProductsCollectionName { get; set; } = null!;
	}
}

