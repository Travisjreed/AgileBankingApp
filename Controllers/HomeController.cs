using Microsoft.AspNetCore.Mvc;
using System.IO;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/html");
    }
}
