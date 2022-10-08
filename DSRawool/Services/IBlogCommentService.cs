using DSRawool.Models;

namespace DSRawool.Services
{
    public interface IBlogCommentService
    {
        Task<IEnumerable<BlogCommentResponseModel>> GetCommentsAsync(int BlogId);
    }
}
