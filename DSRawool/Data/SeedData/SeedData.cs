using DSRawool.Data.Entities;
using IdentityModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Serilog;
using System.Security.Claims;

namespace DSRawool.Data.SeedData;

public class SeedData
{
    public static void EnsureSeedData(WebApplication app)
    {
        using (var scope = app.Services.GetRequiredService<IServiceScopeFactory>().CreateScope())
        {
            var context = scope.ServiceProvider.GetService<ApplicationDbContext>();
            context.Database.Migrate();

            var userMgr = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
            var defaultUser = userMgr.FindByNameAsync("dattatrayrawool2@gmail.com").Result;
            if (defaultUser == null)
            {
                defaultUser = new User
                {
                    FirstName = "Dattatray",
                    LastName = "Rawool",
                    UserName = "dattatrayrawool2@gmail.com",
                    Email = "dattatrayrawool2@gmail.com",
                    EmailConfirmed = true,
                };
                var result = userMgr.CreateAsync(defaultUser, "Pass123$").Result;
                if (!result.Succeeded)
                {
                    throw new Exception(result.Errors.First().Description);
                }

                result = userMgr.AddClaimsAsync(defaultUser, new Claim[]{
                            new Claim(JwtClaimTypes.Name, "Dattatray Rawool"),
                            new Claim(JwtClaimTypes.GivenName, "Datta"),
                            new Claim(JwtClaimTypes.FamilyName, "Rawool"),
                            new Claim(JwtClaimTypes.WebSite, "http://www.dsrawool.com"),
                        }).Result;
                if (!result.Succeeded)
                {
                    throw new Exception(result.Errors.First().Description);
                }
                Log.Debug("datta created");
            }
            else
            {
                Log.Debug("datta already exists");
            }
        }
    }
}
