using Microsoft.AspNetCore.Identity;

namespace DSRawool.Data.Entities
{
    public class User : IdentityUser
    {
        public string? FirstName { set; get; }
        public string? LastName { set; get; }
        public string? City { set; get; }
        public string? Country { set; get; }
        public List<Blog>? Blogs { set; get; }
        public List<BlogComment>? BlogComments { set; get; }    
    }
}
