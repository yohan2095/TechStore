﻿using System;
using TechStoreApi.Models;
using TechStoreApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace TechStoreApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
	private readonly ProductsService _productsService;

	public ProductsController(ProductsService productsService) =>
		_productsService = productsService;

	[HttpGet]
	public async Task<List<Product>> Get() =>
		await _productsService.GetAsync();

	[HttpGet("{id:length(24)}")]
	public async Task<ActionResult<Product>> Get(string id)
    {
		var product = await _productsService.GetAsync(id);

		if (product is null)
        {
			return NotFound();
        }

		return product;
    }

	[HttpPost]
	public async Task<IActionResult> Post(Product newProduct)
    {
		await _productsService.CreateAsync(newProduct);

		return CreatedAtAction(nameof(Get), new { id = newProduct.Id }, newProduct);
    }

	[HttpPut("{id:length(24)}")]
	public async Task<IActionResult> Update(string id, Product updatedProduct)
    {
		var product = await _productsService.GetAsync(id);

		if (product is null)
        {
			return NotFound();
        }

		updatedProduct.Id = product.Id;

		await _productsService.UpdateAsync(id, updatedProduct);

		return NoContent();
    }

	[HttpDelete("{id:length(24)}")]
	public async Task<IActionResult> Delete(string id)
    {
		var product = await _productsService.GetAsync(id);

		if (product is null)
        {
			return NotFound();
        }
#pragma warning disable CS8604 //Possible null reference argument.
		await _productsService.RemoveAsync(product.Id);
#pragma warning restore CS8604 //Possible null reference argument.
		return NoContent();
    }
}


