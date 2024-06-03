using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public UsersController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] User user)
    {
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] User user)
    {
        var existingUser = _context.Users.FirstOrDefault(u => u.Username == user.Username && u.Password == user.Password);
        if (existingUser == null)
        {
            return Unauthorized();
        }
        return Ok(new { redirectUrl = "/user.html" });
    }
}
