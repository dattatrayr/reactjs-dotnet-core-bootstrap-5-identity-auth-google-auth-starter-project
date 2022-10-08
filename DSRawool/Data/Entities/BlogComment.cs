using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DSRawool.Data.Entities
{
    [Table("BlogComment", Schema ="dsrawool")]
    public class BlogComment
    {
        [Key]
        [Required]
        public int CommentId { get; set; }
        public int? ParentCommentId { get; set; }
        public int BlogId { get; set; }
        public string? Comment { get; set; }
        public DateTimeOffset CreatedDate { get; set; }
        public DateTimeOffset UpdatedDate { get; set; }
        public string? CreatedBy { get; set; }
        public Blog? Blog { get; set; }
        public BlogComment? ParentComment { get; set; }
        public List<BlogComment>? Replies { get; set; }
        public User? CreatedByUser { get; set; }
    }
}
