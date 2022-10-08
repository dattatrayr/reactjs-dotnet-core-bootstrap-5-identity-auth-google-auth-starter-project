namespace DSRawool.Models
{
    public class BlogCommentResponseModel
    {
        public int CommentId { get; set; }
        public int? ParentCommentId { get; set; }
        public string? Comment { get; set; }
        public DateTimeOffset CreatedDate { get; set; }
        public string? CreatedBy { get; set; }
        public List<BlogCommentResponseModel>? Replies { get; set; }
    }
}
