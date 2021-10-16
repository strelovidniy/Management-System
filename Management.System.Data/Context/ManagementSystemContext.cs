using Microsoft.EntityFrameworkCore;

namespace Management.System.Data.Context
{
    public class ManagementSystemContext : DbContext
    {
        public ManagementSystemContext(DbContextOptions<ManagementSystemContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.EnableSensitiveDataLogging();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}