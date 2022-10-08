using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DSRawool.Data.Entities
{
    [Table("Blog", Schema = "dsrawool")]
    public class Blog
    {
        [Key]
        [Required]
        public int BlogId { get; set; }
        public string? BlogName { get; set; }
        public DateTimeOffset CreatedDate { get; set; }
        public string? CreatedBy { get; set; }
        public List<BlogComment>? BlogComments { get; set; }
        public User? CreatedByUser { get; set; }
    }
}
