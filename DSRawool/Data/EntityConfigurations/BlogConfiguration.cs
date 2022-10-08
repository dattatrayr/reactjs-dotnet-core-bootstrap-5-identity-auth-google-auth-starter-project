using DSRawool.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DSRawool.Data.EntityConfigurations
{
    public class BlogConfiguration : IEntityTypeConfiguration<Blog>
    {
        public void Configure(EntityTypeBuilder<Blog> builder)
        {
            builder.HasOne(x => x.CreatedByUser)
                    .WithMany(y => y.Blogs)
                    .HasForeignKey(x => x.CreatedBy);

            builder.Property(x => x.CreatedDate).HasDefaultValueSql("NOW()");
        }
    }
}
