// Simple Test Data Generator for TrustID
// Run this in browser console to add sample jobs

function addTestJobs() {
    const jobs = [
        {
            id: 'test_job_1',
            employerId: 'test_employer_1',
            employerName: 'Akmal Usmonov',
            employerRating: 4.8,
            title: 'Uy qurilish ishchi kerak',
            category: 'Qurilish',
            description: 'Hovli devoriga g\'isht terish, 3 kun davomida. Tajribali ishchilar kerak.',
            requirements: ['3 yildan ortiq tajriba', 'G\'isht terish ko\'nikmalari'],
            salary: 2500000,
            location: 'Toshkent',
            duration: '3 kun',
            escrowRequired: true,
            urgent: false,
            requiredExperience: 3,
            minRating: 0,
            status: 'active',
            views: 0,
            applicantsCount: 0,
            createdAt: new Date().toISOString()
        },
        {
            id: 'test_job_2',
            employerId: 'test_employer_2',
            employerName: 'Botir Rahimov',
            employerRating: 4.5,
            title: 'Elektrik simlar o\'tkazish',
            category: 'Elektrik',
            description: 'Yangi qurilayotgan binoga elektr tarmog\'ini o\'tkazish.',
            requirements: ['Elektr sertifikati', '5 yildan ortiq tajriba'],
            salary: 4000000,
            location: 'Toshkent',
            duration: '1 hafta',
            escrowRequired: true,
            urgent: true,
            requiredExperience: 5,
            minRating: 4.0,
            status: 'active',
            views: 0,
            applicantsCount: 0,
            createdAt: new Date().toISOString()
        },
        {
            id: 'test_job_3',
            employerId: 'test_employer_3',
            employerName: 'Dilshod Karimov',
            employerRating: 4.2,
            title: 'Bog\' parvarish qilish',
            category: 'Bog\'dorchilik',
            description: 'Katta bog\'da daraxtlarni kesish, maysalarni tozalash.',
            requirements: ['Bog\'dorchilik tajribasi'],
            salary: 1200000,
            location: 'Samarqand',
            duration: 'Haftada 3 kun',
            escrowRequired: false,
            urgent: false,
            requiredExperience: 1,
            minRating: 0,
            status: 'active',
            views: 0,
            applicantsCount: 0,
            createdAt: new Date().toISOString()
        }
    ];

    // Add to localStorage
    const existingJobs = JSON.parse(localStorage.getItem('trustid_jobs') || '[]');
    const allJobs = [...existingJobs, ...jobs];
    localStorage.setItem('trustid_jobs', JSON.stringify(allJobs));

    console.log('✅ Test jobs added:', jobs.length);
    alert('3 ta test ish e\'lonlari qo\'shildi!');
}

// To clear all data
function clearAllData() {
    if (confirm('Barcha ma\'lumotlarni o\'chirmoqchimisiz?')) {
        localStorage.removeItem('trustid_jobs');
        localStorage.removeItem('trustid_applications');
        localStorage.removeItem('trustid_contracts');
        localStorage.removeItem('trustid_transactions');
        console.log('✅ All data cleared!');
        alert('Barcha ma\'lumotlar o\'chirildi!');
        location.reload();
    }
}

// Auto-add on page load if no jobs exist (optional)
if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
    const jobs = JSON.parse(localStorage.getItem('trustid_jobs') || '[]');
    if (jobs.length === 0) {
        console.log('ℹ️ No jobs found. You can run addTestJobs() in console to add sample jobs.');
    }
}

// Make functions available globally
window.addTestJobs = addTestJobs;
window.clearAllData = clearAllData;
