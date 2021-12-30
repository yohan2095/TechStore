using TechStoreApi.Models;
using TechStoreApi.Services;

var MyPolicy = "_myPolicy";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyPolicy,
                builder =>
                {
                    builder.AllowAnyOrigin();
                    builder.AllowAnyMethod();
                    builder.AllowAnyHeader();
                });
});

// Add services to the container.
builder.Services.Configure<TechStoreDatabaseSettings>(
    builder.Configuration.GetSection("TechStoreDatabase"));

builder.Services.AddSingleton<ProductsService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyPolicy);

app.UseAuthorization();

app.MapControllers();

app.Run();

