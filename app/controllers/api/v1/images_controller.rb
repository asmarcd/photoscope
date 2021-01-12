module api
    module v1
        class ImagesController < ApplicationController
            def index
                images = Image.all

                render json: ImageSerializer.new(images).serialized_json
            end

            def show
                image = Image.where(tag: params[:tag])
            end

            def create
                image = Image.new(image_params)

                if image.save
                    render json: ImageSerializer.new(image).serialized_json              
                else
                    render json: {error: image.errors.messages}, status: 422
                end    
            end

            def update
                image = Image.find_by(id: params[:id])

                if image.update(image_params)
                    render json: ImageSerializer.new(image).serialized_json              
                else
                    render json: {error: image.errors.messages}, status: 422
                end    
            end

            def destroy
                image = Image.find_by(id: params[:id])

                if image.destroy(image_params)
                    head :no_content             
                else
                    render json: {error: image.errors.messages}, status: 422
                end    
            end

            private

            def image_params
                params.require(:image).permit(:name, :image_url, :caption, :tag)
            end

        end
    end
end