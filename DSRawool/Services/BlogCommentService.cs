using DSRawool.Data;
using DSRawool.Models;
using Microsoft.EntityFrameworkCore;

namespace DSRawool.Services
{
    public class BlogCommentService : IBlogCommentService
    {
        protected ApplicationDbContext _DbContext { get; set; }
        public BlogCommentService(ApplicationDbContext ApplicationDbContext)
        {
            _DbContext = ApplicationDbContext;
        }

        public async Task<IEnumerable<BlogCommentResponseModel>> GetCommentsAsync(int BlogId)
        {
            var result = await _DbContext.BlogComments
                                .Include(x => x.Replies)
                                .Where(bc => bc.BlogId == BlogId && bc.ParentCommentId == null)
                                .Select(s => new BlogCommentResponseModel
                                {
                                    CommentId = s.CommentId,
                                    ParentCommentId = s.ParentCommentId,
                                    Comment = s.Comment,
                                    CreatedDate = s.CreatedDate,
                                    CreatedBy = s.CreatedByUser != null ? s.CreatedByUser.UserName + " " + s.CreatedByUser.LastName : "",
                                    Replies = s.Replies != null ? s.Replies.Select(r => new BlogCommentResponseModel
                                    {
                                        CommentId = r.CommentId,
                                        ParentCommentId = r.ParentCommentId,
                                        Comment = r.Comment,
                                        CreatedDate = r.CreatedDate,
                                        CreatedBy = s.CreatedByUser != null ? s.CreatedByUser.UserName + " " + s.CreatedByUser.LastName : ""
                                    }).ToList() : null
                                })
                                .ToListAsync();
            return result;
        }
    }
}
