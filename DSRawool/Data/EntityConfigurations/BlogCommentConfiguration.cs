using DSRawool.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DSRawool.Data.EntityConfigurations
{
    public class BlogCommentConfiguration : IEntityTypeConfiguration<BlogComment>
    {
        public void Configure(EntityTypeBuilder<BlogComment> builder)
        {
            builder.HasOne(y => y.Blog)
                   .WithMany(x => x.BlogComments)
                   .HasForeignKey(x => x.BlogId);

            builder.HasOne(x=>x.ParentComment)
                   .WithMany(x=>x.Replies)
                   .HasForeignKey(x => x.ParentCommentId);

            builder.HasOne(x => x.CreatedByUser)
                    .WithMany(y => y.BlogComments)
                    .HasForeignKey(x=>x.CreatedBy);

            builder.Property(x => x.CreatedDate).HasDefaultValueSql("NOW()");
            builder.Property(x => x.UpdatedDate).HasDefaultValueSql("NOW()");
        }
    }
}
