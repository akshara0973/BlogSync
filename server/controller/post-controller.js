
import Post from '../model/post.js';
import mongoose from 'mongoose';
// import Post from '../model/post.js';



export const createPost = async (request, response) => {
    try {
        const post = await new Post(request.body);
        post.save();

        response.status(200).json('Post saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        if (!post) {
            response.status(404).json({ msg: 'Post not found' })
        }
        
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

// export const deletePost = async (request, response) => {
//     try {
//         const post = await Post.findById(request.params.id);
        
//         await post.delete()

//         response.status(200).json('post deleted successfully');
//     } catch (error) {
//         response.status(500).json(error)
//     }
// }

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const deletePost = async (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(400).json({ message: 'Invalid post ID' });
    }

    try {
        const post = await Post.findById(id);

        if (!post) {
            return response.status(404).json({ message: 'Post not found' });
        }

        await post.deleteOne(); // or await Post.findByIdAndDelete(id)

        response.status(200).json('Post deleted successfully');
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let posts;
    try {
        if(username) 
            posts = await Post.find({ username: username });
        else if (category) 
            posts = await Post.find({ categories: category });
        else 
            posts = await Post.find({});
            
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}