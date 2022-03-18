
const { SupabaseClient, createClient } = require('@supabase/supabase-js');
// Create a single supabase client for interacting with your database

const SUPABASE_URL = "https://bydvbzewjalflpomzofv.supabase.co"
const subaBaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5ZHZiemV3amFsZmxwb216b2Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1MDA0OTEsImV4cCI6MTk2MzA3NjQ5MX0.btB55nSpZhHmFY6PMh4seYkwgZd8UPIY0tziIHYyPd4'

const supabase = createClient(SUPABASE_URL, subaBaseKey)

// const { data, error } = await supabase.storage.createBucket('avatars')

// supabase.storage.getBucket('videos')

async function api() {
    // const avatarFile = event.target.files[0]
    const { data, error } = await supabase.storage
        .from('videos')
        .upload('./file.jpg', )

        console.log("ERR");
        console.log(error);
        console.log("DAta");
    console.log(data);

}


api()
    .then(_ => {
        console.log("OK");
        console.log(_);
    })
    .catch(_ => {
        console.log("PATHETIC");
        console.log(_);
    })