using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TechStoreApi.Models
{
	public class Product
	{
		[BsonId]
		[BsonRepresentation(BsonType.ObjectId)]
		public string? Id { get; set; }

		[BsonElement("Name")]
		public string ProductName { get; set; } = null!;

		public decimal Price { get; set; }

		public string Category { get; set; } = null!;

		public string Firm { get; set; } = null!;

		public string ImgUrl { get; set; } = null!;
	}
}
